import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Album from './Album';
import AlbumDetail from './AlbumDetail';

const App = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then(arr => setAlbums(arr))
            .catch(err => console.log(err));
    }, []);

    let collection = albums.map((album) => {
        return (
            <Album key={album.id} album={album} />
        );
    });


    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/">
                        <div className="container">
                            <div className="card-group">{collection}</div>
                        </div>
                    </Route>
                    <Route path="/:id/details" component={AlbumDetail} />
                </Switch>
            </>
        </Router>

    );



}

export default App;