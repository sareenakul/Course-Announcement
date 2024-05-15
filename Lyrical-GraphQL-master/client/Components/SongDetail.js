import React, {Component} from "react";
import gql from "graphql-tag";
import { graphql } from "graphql";

class SongDetail extends Component{
    render(){
        return(
            <div>
                <h3>Song Details</h3>
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

export default SongDetail;