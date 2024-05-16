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
            }
        }).then(this.props.data.refetch());
    }

    renderSongs(){
        return this.props.data.songs.map(song => {
            return(
                <li key={song.id} className="collection-item">
                    <div className="songItem">
                        <Link to = {`/songs/${song.id}`}>
                            {song.title}
                        </Link>
                        <div className="point">
                            <i className="material-icons" onClick={(event)=> this.handleDelete(event ,song.id)}>delete</i>
                        </div>
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
                <h1 className="title">My Notes</h1>
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