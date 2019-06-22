import React, { Component } from "react"

class DropDown extends Component {
  state = {}

  render() {
    return (
      <div className="dropdown">
        <select
          className="select-css"
          onChange={e => {
            console.log(e.target.value)
          }}
        >
          {this.props.options.map((q, i) => (
            <option key={i} value={q}>
              {q}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default DropDown
