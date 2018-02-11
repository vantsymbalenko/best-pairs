import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from '../actions/request';
import ErrorComponent from '../components/ErrorComponent';
import Loader from '../components/Loader';
import PairsComponent from '../components/PairsComponent';
import '../css/app.css';

class App extends Component {
  componentWillMount(){
    this.props.request();
  }
  render() {
    return (
      <div className="container">
        {this.props.error ? <ErrorComponent error = {this.props.error}/> : null}
        {this.props.isLoading ? <Loader /> : null}
        {this.props.pairs? <PairsComponent pairs = {this.props.pairs}/> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  pairs : state.pairs,
  error : state.error,
  isLoading : state.isLoading
});

const mapDispatchToProps = {
  request : request
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
