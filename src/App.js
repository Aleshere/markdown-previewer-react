import React, { Component } from 'react'
import Badge from "react-bootstrap/Badge";
let marked = require('marked');


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      markdown: 
      '### React Markdown Previewer\ Built with love, and no hooks!\ '
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }


  render() {

    const inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };

    const outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };


    return (
      <div className='App'>
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
              <Badge
              className="text-align-center"
              variant="light">
              Markdown Previewer
              </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                  ></textarea>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
              ></div>
            </div>
          </div>
          </div>
        </div>
    );
  }
}
