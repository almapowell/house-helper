import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import styled from '@emotion/styled';
// import { ConnectedRouter } from 'connected-react-router';
// import App from './components/App';
import Home from './components/Home';
import AddProject from './components/AddProject';
import SearchListings from './components/SearchListings';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = styled.div`
  padding: 90px 80px 25px 80px;
  position: relative;
  min-height: 63vh;
  background: #EDEDED;
`;

const Wrap = styled.div`
padding-bottom: 2.5rem; 
`;

const Routes = () => {

    return (
    // <ConnectedRouter history={browserHistory}>
    <Router>
      <>
        <Header />
        <Layout>
          <Wrap>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/add-project" component={AddProject} />
            <Route path="/search-listings" component={SearchListings} />
            <Route path="/login" component={Login} />
          </Switch>
          </Wrap>
        </Layout>
        <Footer />
      </>
    </Router>
  );
};

export default Routes;
