import React from 'react';
import logo from './logo.svg';
import "semantic-ui-css/semantic.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import chain from './api/chain' ;
import List from './components/List'


function Index(props) {
  return (
    <div>
      <h2>Hello</h2>
      <List />
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const CASTOR_PROVIDER = "ws://127.0.0.1:9944";

class App extends React.Component {


  async componentDidMount() {
    await chain.init(CASTOR_PROVIDER);
    await chain.connect();
    let balance = await chain.getBalance("5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY")
    console.log(balance);
    const keys = chain.getKeysFromUri("//Alice");
    console.log(keys.address);
  }
  
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }
}

export default App;
