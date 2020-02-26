import React from 'react';
import { Router, Redirect } from '@reach/router';
import CourseListPage from './Pages/CourseListPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Redirect noThrow from="/" to="/courses" />
        <CourseListPage path="/courses" />
      </Router>
    </div>
  )
}

export default App
