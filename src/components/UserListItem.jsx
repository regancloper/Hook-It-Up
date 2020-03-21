import React from 'react';
import { useHistory } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const UserListItem = ({ user }) => {

    const history = useHistory();

    const handleClick = () => {
        history.push(`users/${user.id}/details`);
    }

    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
            {user.username}
            <Button onClick={handleClick} variant="outline-secondary" size="sm" className="shadow-sm">Get Details</Button>
        </ListGroup.Item>
    );
}

export default UserListItem;