import React, { Component, Suspense } from "react"
import logo from "../logo.svg"
import "../App.css"
const App = React.lazy(() => import("../App"))

class Loading extends Component {
  render() {
    return (
      <Suspense fallback={<div class="loader">Loading...</div>}>
        <App />
      </Suspense>
    )
  }
}

export default Loading
