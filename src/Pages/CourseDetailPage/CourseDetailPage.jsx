import React, { useEffect }  from 'react';
// import { Redirect } from '@reach/router';
import { connect } from 'react-redux';
import Loading from '../../Components/Loading/Loading';
import NotFoundPage from '../NotFoundPage';
import { loadLessons } from '../../Redux/actions';

// Selectors
import { getLessonsByCourse, getCourseById } from '../../Redux/selectors';

import styles from './CourseDetailPage.module.css';
import NewLesson from '../../Components/NewLesson/NewLesson';

function CourseDetailPage(props) {
  const { courseId, course, loading, lessons, loadLessons } = props;

  useEffect(() => {
    loadLessons();
  }, [loadLessons])

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
  return {
    loading: state.courses.coursesLoading,
    lessons: getLessonsByCourse(state, ownProps),
    course: getCourseById(state, ownProps),
  }
}

export default connect(mapStateToProps, {loadLessons})(CourseDetailPage);
