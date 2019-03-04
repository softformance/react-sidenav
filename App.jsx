import React, { Component } from 'react';
import {
  Router,
  Route,
} from 'react-router-dom';
// !!!!UNCOMMENT IT WHEN HAVE THE FIRST ACTION!!!!
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux';
// import * as CounterActions from './actions'

import SideNav, {
  // Toggle,
  // Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import Header from './components/base/Header';
import Dashboard from './components/dashboard/Dashboard';


import './stylus/main.styl';

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(CounterActions, dispatch)
// };

class App extends Component { // eslint-disable-line
  constructor(props) { // eslint-disable-line
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Route render={({ location, history }) => (
            <React.Fragment>
              <SideNav
                onSelect={(selected) => {
                  const to = `/${selected}`;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                  <NavItem eventKey="home">
                    <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                      Dashboard
                    </NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
              <main>
                <Route path="/" exact component={props => <Dashboard props={props} />} />
              </main>
            </React.Fragment>
          )}
          />
        </Router>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
