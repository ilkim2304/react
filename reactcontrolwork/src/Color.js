import React from "react"

class Letter extends React.Component {
  render() {
    let charStyle = {
      width: 30,
      height: 30,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
    return <div style={charStyle}>{this.props.char}</div>
  }
}

export default class Color extends React.Component {
    render() {
      let st = {
        backgroundColor: this.props.txt,
        display: "flex",
        justifyContent: "center"
      }
      return <div className="color" style={st}>
          {this.props.txt.split("").map(el => <Letter char={el}/>)}
        </div>
    }
  }