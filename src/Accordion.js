import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            expanded: false
        };
    }

    // updateModal(id) {
    //     console.log(`modal for ${id}` );
    //     fetch(`https://final-proj-app.herokuapp.com/api/notes/${id}`, {
    //     method: "PUT",
    //     body: JSON.stringify({
    //         // request body that is sent to the api
    //         isModalOpen: this.state.isModalOpen

    //     }),
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //     }
    //     }).then((response) => {
    //         return response.json();
    //     });
    //     //return true;
    // }

    // updateExpanded(notesId, isExpanded) {
    //     // isExpanded ? (
    //     //     {this.setState( {
    //     //         expanded: false
    //     //     })}
    //     // ) : (
    //     //     {this.setState( {
    //     //         expanded: true
    //     //     }) }
    //     // )
    //     console.log("in updateExpanded()");
    //     this.setState({
    //         expanded: isExpanded ?  false :  true
    //     })
    //     console.log(this.state);

    //     fetch(`https://final-proj-app.herokuapp.com/api/notes/${notesId}`, {
    //     method: "PUT",
    //     body: JSON.stringify({
    //         // request body that is sent to the api
    //         expanded: this.state.expanded
    //     }),
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //     }
    //     }).then((response) => {
    //         return response.json();
    //     });
    //     //return true;
    // }

    doNothing() {
        // literally doing nothing
    }


  render() {
    let expanded = this.props.expanded;
    let notesid = this.props.notesId;

    return (
      <div className="accordion">
        <h2 className="accordion-header">
          <button
            type="button"
            className="btn bt-link accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            onClick={() => {    
              //this.updateExpanded(notesid, expanded);   
              const updatedChange = expanded ? false : true;
              this.props.onButtonClick(updatedChange);
            }}
          >
            {this.props.topic}
            {/* {this.props.expanded ? <> - </> : <>+</>} */}
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            {this.props.expanded ? 
                (<> 
                    <div> {this.props.body} </div> 
                    <div> Posted: {this.props.date} </div>
                    <div className="btn-group">
                        <Link
                            to={`/notes/${notesid}`}
                            className="btn btn-primary"
                            notesId={notesid}
                        >
                            View Note
                        </Link>
                        
                    </div> 
                </>
                ) : (
                <></>)}
          </div>
        </div>
      </div>
    );
  }
}

Accordion.propTypes = {
  topic: PropTypes.string,
  body: PropTypes.string,
  onClick: PropTypes.func
};
