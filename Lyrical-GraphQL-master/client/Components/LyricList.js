import React, {Component} from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";

class LyricList extends Component{

    renderLyrics(){
        return this.props.lyrics.map(({id, content}) => {
            return(
                <li key={id} className="collection-item">{content}</li>
            );
        });
    }




    render(){
        

        return(
        <div>
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        </div>
        );
    }
}



export default LyricList;