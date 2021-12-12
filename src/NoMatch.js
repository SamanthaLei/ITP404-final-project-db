import React from "react";

export default class NoMatch extends React.Component {
    render() {
        console.log("no match");

        return(
            <h5 className="no-match">
                Sorry, that page does not exist.
            </h5>
        )
    }
    
}
