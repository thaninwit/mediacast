import React, { Component } from 'react';
import './ReceiverApp.css';
import Receiver from './components/Receiver.js';

class ReceiverApp extends Component {
  render() {
    return (
      <div className="Receiver-App">
        <Receiver />
      </div>
    );
  }
}


export default ReceiverApp;
