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
