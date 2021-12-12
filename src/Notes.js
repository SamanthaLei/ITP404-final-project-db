import React from "react";
import Accordion from "./Accordion";

export default class Notes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            expanded: false
        };
    }

    componentDidMount() {
        document.title = "Notes List";
        fetch(
            "https://final-proj-app.herokuapp.com/api/notes"
        ).then((response) => {
            return response.json();
        }).then((json) => {
            console.log(json);
            this.setState({notes: json});
        });
        
    }


    // updateNotesExpanded(notesId, isExpanded) {
    // //     console.log(this.state.expanded);
    // //     const id = notesId;
    // //     fetch(`https://final-proj-app.herokuapp.com/api/notes${id}`, {
    // //         method: "PUT",
    // //         body: JSON.stringify({
    // //             expanded: this.state.expanded
    // //         }).then((response) => {
    // //             return response.json();
    // //         }).then((json) => {
    // //             console.log(json);
    // //         })
    // //     })
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
    // }

    render() {
        return (
            <>
                <ol>
                    {this.state.notes.map((notes) => {
                        return(
                            // <li key={notes.id} >
                            //     {notes.title}
                            // </li>
                            
                            <Accordion
                            key={notes.id}
                            expanded={this.state.expanded}
                            notesId={notes.id}
                            onButtonClick={(updatedChange) => {
                                //this.updateNotesExpanded(`{notes.id}`, this.state.expanded);
                                console.log("clicked");
                                console.log(notes.id);
                                this.setState({expanded: updatedChange});
                            }}
                            // onButtonClick={(`{notes.id}`) => {
                            //     this.setState({expanded: updatedChange});
                            // } }
                            topic={notes.title}
                            body={notes.body}
                            date={notes.date}
                            
                            /> 
                             
                        )
                    })}
                </ol>

            </>
        );
    }
}
