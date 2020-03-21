import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Home from './pages/Home';
import Details from './pages/Details';

const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Row className="justify-content-center mt-3">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/users/:userid/details">
                            <Details />
                        </Route>
                        <Route>
                            <h1 className="text-center mt-5">404 Not Found</h1>
                        </Route>
                    </Switch>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;