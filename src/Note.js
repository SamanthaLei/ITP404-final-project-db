import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import Modal from "./Modal";

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {},
      isModalOpen: false,
      isModalOpen1: false,
      isModalOpen2: false,
      isModalOpen3: false,
    };
    // {} = object
    // [] = array
    // () = function
  }

  componentDidMount() {
    
    const id = this.props.match.params.notesid;
    document.title = `Note #${id}`;

    fetch(`https://final-proj-app.herokuapp.com/api/notes/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ note: json });
      });
  }

  deleteNote() {
    const id = this.props.match.params.notesid;
    const url = `https://final-proj-app.herokuapp.com/api/notes/${id}`;
    fetch(url, {
      method: "DELETE"
    }).then(() => {
      // don't need the json bc we'd just delete it anyways
      toast.success(`Good bye, Note "${this.state.note.title}".`);
      this.props.history.push("/");
    });
    
  }

  pinIt(id) {
    //console.log(this.state.note.pinned);
    let pinChange = this.state.note.pinned;
    //console.log(pinChange);
    pinChange = pinChange ? false : true;
    //console.log(pinChange);
    //console.log(this.state);
    fetch(`https://final-proj-app.herokuapp.com/api/notes/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        // request body that is sent to the api
        title: this.state.note.title,
        body: this.state.note.body,
        date: this.state.note.date,
        pinned: pinChange
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        // the response is the object of the newly created post
        return response.json();
      })
      .then((json) => {
        //console.log(json);
        //console.log(this.state);  
        //this.props.history.push("/"); // redirects to the / route
      });

  }

  render() {
    return (
      <div className="rounded-corner-container">
        <h1 className="rounded-corner-title">{this.state.note.title}</h1>
        <p className="note-body"> {this.state.note.body}</p>
        <div className="btn-group">

          {/* // Edit Button */}
          <Link 
            to={`/notes/${this.state.note.id}/edit`}
            className="btn btn-primary edit-btn"
          >
            Edit
          </Link>

          {/* // Delete Button */}
          <button
            type="button btn"
            className="btn btn-danger delete-btn"
            onClick={() => {
              this.setState({isModalOpen: true});
            }}
          >
            Delete
          </button>

          {/* // Pin Button */}
          <button
            type="button btn"
            className="btn btn-group  "
            onClick={() => {
              //console.log(this.state.note.pinned);
              this.pinIt(this.state.note.id);
            }}
          >
            {this.state.note.pinned ? ("Unpin") : ("Pin")}
          </button>

          { this.state.isModalOpen && ( 
              <Modal
                  title="Are you sure you want to delete this note?"
                  body={() => {
                    return( 
                      <button 
                        className="btn btn-danger button"
                        onClick = {() => {
                        this.deleteNote();
                      }}> 
                        Delete
                      </button>
                    );
                  }}
                  onClose={() => {
                    this.setState({ isModalOpen: false });
                  }}
              />
          )}
        </div>
      </div>
    );
  }
}
