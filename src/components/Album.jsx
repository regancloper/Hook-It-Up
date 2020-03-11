import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Album = (props) => {

    return (
        <div className="col-6 py-2">
            <div className="card h-100">
                <div className="card-body">
                    <Link to={`/${props.album.id}/details`}>{props.album.title}</Link>
                    <p className="card-text">UserId: {props.album.userId}</p>
                </div>
            </div>
        </div>





    );

}


export default Album;