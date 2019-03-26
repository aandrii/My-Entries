//let React = require('react');
import React from 'react'
let ReactDOM = require('react-dom')
require('./index.css')
require('./index.scss')

class App extends React.Component {
  render() {
    return (
      <div>hell t
      <h1>Andrii</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
)
