import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import chain from "../api/chain";
import NodeRenderer from "./NodeRenderer";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      node: null
    }
  }

  async componentDidMount() {
    let listings = await chain.getListings(1);
    console.log(listings);
    let node = await chain.getNode("0x1234");
    if(node) {
      console.log(node);
      this.setState({node: node})
    }

  }
  render() {
    return (
      <div>
        <NodeRenderer node={this.state.node} ipfsGatewayUrl={'http://localhost:8080'}/>
      </div>
    );
  }
}
