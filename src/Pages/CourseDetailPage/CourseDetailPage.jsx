import React from 'react';
// import { Redirect } from '@reach/router';
import { connect } from 'react-redux';
import Loading from '../../Components/Loading/Loading';
import NotFoundPage from '../NotFoundPage';

import styles from './CourseDetailPage.module.css';
import NewLesson from '../../Components/NewLesson/NewLesson';

function CourseDetailPage(props) {
  const { courseId, course, loading, lessons } = props;
  if(loading) {
    return <Loading />
  }

  if(!course) {
    return <NotFoundPage />
    // return <Redirect noThrow to="/" />
  }

  console.log('LESSONS', lessons)

  return (
    <div className={styles.detailsWrapper}>
       <header className={styles.header}>
          {course.name}
       </header>
       <div className={styles.content}>
         {lessons.length > 0 && (
           <ul>
             {lessons.map(lesson => (
               <li key={lesson.id}>{lesson.name}</li>
             ))}
           </ul>
         )}
         <NewLesson courseId={courseId} />
       </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const courseId = parseInt(ownProps.courseId, 10);
  return {
    loading: state.coursesLoading,
    lessons: state.lessons.filter(lessons => +lessons.courseId === courseId),
    course: state.courses.find(c => c.id === courseId),
  }
}

export default connect(mapStateToProps)(CourseDetailPage);
