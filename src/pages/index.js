import React from "react"

import { Link, BrowserRouter as Router } from "react-router-dom"

export default function Home() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/task-input-widget">Task Input Widget</Link>
        </li>
        <li>More coming soon...</li>
      </ul>
    </Router>
  )
}
