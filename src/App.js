import React from 'react';
import { Router, Redirect } from '@reach/router';
import CourseListPage from './Pages/CourseListPage';
import CourseDetailPage from './Pages/CourseDetailPage/CourseDetailPage';
import LessonPage from './Pages/LessonPage/LessonPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Redirect noThrow from="/" to="/courses" />
        <CourseListPage path="/courses" />
        <CourseDetailPage path="/courses/:courseId">
          <LessonPage path="lessons/:lessonId" />
        </CourseDetailPage>
      </Router>
    </div>
  )
}

export default App
