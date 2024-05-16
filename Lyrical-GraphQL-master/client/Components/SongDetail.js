import React, {Component} from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

class SongDetail extends Component{
    render(){
        const {song} = this.props.data;

        if(!song){
            return <div>Loading...</div>
        }
        return(
            <div>
                <Link to ="/">Back</Link>
                <h3>{song.title}</h3>
            </div>
        );
    }
}

const songByID = gql`
    query SongQuery($id: ID!){
        song(id: $id){
            id
            title
        }
    }
`;

export default graphql(songByID, {
    options: (props) => { return { variables: {id: props.params.id}}}
})(SongDetail);