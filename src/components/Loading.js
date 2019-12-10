import React, { Component, Suspense } from "react"
import "../App.css"
const App = React.lazy(() => import("../App"))

class Loading extends Component {
  render() {
    return (
      <Suspense
        fallback={
          <div className="centeredHV">
            <div className="loader">Loading...</div>
          </div>
        }
      >
        <App />
      </Suspense>
    )
  }
}

export default Loading
