import React, { useState, useEffect } from 'react';


const AlbumDetail = (props) => {

    const [details, setDetails] = useState([]);

    const getDetails = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/albums/${props.match.params.id}`);
        let details = await res.json();
        setDetails(details);
    }

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div className="container my-4">
            <h1>{details.title}</h1>
            <p>UserId: {details.userId}</p>
            <p>Id: {details.id}</p>
        </div>
    );

}




export default AlbumDetail;
