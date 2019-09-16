import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import MarkdownRenderer from "./MarkdownRenderer";
let nodeType = [
  "jpg",
  "txt",
  "json",
  "mp4",
  "whiteboard",
  "TCX Pointer",
  "Node Pointer",
  "markdown",
];

export default class NodeRenderer extends Component {
  render() {
    let { node, ipfsGatewayUrl } = this.props;
    if(!node) {
      return <div>Loading</div>
    } 

    let typeId = node.node_type.toNumber();
    let cid = node.id.toHex();
    // let cid = "QmVFX5VKCN2cEGtB7JrHms1Bq9PcFQ7cDhHHujgYVyfzSA";
    
    let content;
    let url = `${ipfsGatewayUrl}/ipfs/${cid}`;
    switch (typeId) {
      case 0:
        // jpg
        content = <img src={url}></img>;
        break;
      case 1:
        // txt
        content = (
          <object data={url} width="100%">
            Not supported
          </object>
        );
        break;
      case 2:
        // json
        content = (
          <object data={url} width="100%">
            Not supported
          </object>
        );
        break;
      case 3:
        // mp4
        content = (
          <video width="100%" controls>
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
        break;
      case 4:
        // whiteboard
        content = <p>whiteboard</p>;
        break;
      case 5:
        // tcx pointer
        content = <p>tcx pointer</p>;
        break;
      case 6:
        // node pointer
        content = <p>node pointer</p>;
        break;
      case 7:
        // markdown
        content = <MarkdownRenderer url={url}/>
        break;
      default:
        content = <p>No renderer for node type</p>;
    }

  
    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    );
  }
}
