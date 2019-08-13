// import modules
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import styles 
import '../styles/ui.css';

// import components
import Header from './ui/Header';
import Footer from './ui/Footer';
import Home from './ui/Home';
import Teacher from './ui/Teacher';

// export default function component
export default () => {
    return (
        <>
            <Header />

            <Router>
                <Switch>
                    <Route path='/ui/teacher' component={Teacher} />
                    <Route path={['/ui', '/ui/*', '/ui/home']} component={Home} />
                </Switch>
            </Router>

            <Footer />
        </>
    );
}