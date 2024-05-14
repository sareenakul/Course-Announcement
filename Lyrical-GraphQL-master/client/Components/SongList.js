import React, {Component} from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import { Link } from "react-router";
import "../style/style.css";

class SongList extends Component{

    handleDelete(event, songId){
        event.preventDefault();
        this.props.mutate({
            variables:{
                id: songId
            },
            refetchQueries: [{query: query}]
        });
    }

    renderSongs(){
        return this.props.data.songs.map(song => {
            return(
                <li key={song.id} className="collection-item">
                    <div className="songItem">
                        {song.title}
                        <button className="delete" onClick={(event)=> this.handleDelete(event ,song.id)}>Delete</button>
                    </div>
                </li>
            );
        });
    }


    render(){
        if(this.props.data.loading){
            return(
                <div>Loading...</div>
            );
        }

        return(
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link to="/songs/new" className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
}

const query = gql`
    {
        songs{
            id
            title
        }
    }
`;

const deleteMutation = gql`
    mutation DeleteSong($id: ID!){
        deleteSong(id: $id){
            id
        }
    }
`;

export default graphql(deleteMutation)(graphql(query)(SongList));