import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

class Index extends Component {
 
  render(){
    
    return (
      
       <Router history={ browserHistory }>
          <Route path='/' component={ Layout }>
            <IndexRoute component={ Catalog } />
            <Route path='cart' component={ Cart } />
            <Route path='checkout' component={ Checkout } />
            <Route path='thankyou' component={ ThankYou } />
          </Route>
       </Router>
    
    );
  }
}



const mapStateToProps = state => ({
  route: state.route
});

export default connect(mapStateToProps)(Index);