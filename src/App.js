import React from 'react';
import logo from './logo.svg';
import "semantic-ui-css/semantic.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import chain from './api/chain' ;

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const CASTOR_PROVIDER = "ws://127.0.0.1:9944";
// const CASTOR_PROVIDER = 'wss://polkadot:9944';
chain.init(CASTOR_PROVIDER, run);
function run() {
  chain.connect();
  chain.getBalance("5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", function(
    balance
  ) {
    console.log(balance);
  });
  const keys = chain.getKeysFromUri("//Alice");
  console.log(keys.address);

}

function App() {
  
  return (
    <Router>
      <div>
        <Navbar/>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default App;
