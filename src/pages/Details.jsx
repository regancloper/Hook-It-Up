import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const Details = () => {

    const [user, setUser] = useState({});

    const { userid } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
            .then(res => res.json())
            .then(user => setUser(user));
    }, [userid]);

    return (
        <Col md={12}>
            <Card className="shadow-lg">
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center">
                        <span>Username: {user.username}</span>
                        <span>Name: {user.name}</span>
                        <span>Email: {user.email}</span>
                    </Card.Title>
                    <Card.Text className="border rounded p-3 shadow-sm text-center">
                        Located at {user.address && user.address.street}, {user.address && user.address.city}
                    </Card.Text>
                    <Link className="btn btn-danger" to="/">Go Back</Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Details;