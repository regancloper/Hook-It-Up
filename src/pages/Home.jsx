import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import UserListItem from '../components/UserListItem';

const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users));
    }, []);

    return (
        <Col md={7}>
            <ListGroup>
                {users.map(user => (
                    <UserListItem key={`user-item-${user.id}`} user={user} />
                ))}
            </ListGroup>
        </Col>

    );
}

export default Home;