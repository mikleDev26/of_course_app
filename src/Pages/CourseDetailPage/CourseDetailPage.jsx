import React from 'react';
// import { Redirect } from '@reach/router';
import { connect } from 'react-redux';
import Loading from '../../Components/Loading/Loading';
import NotFoundPage from '../NotFoundPage';

import styles from './CourseDetailPage.module.css';
import NewLesson from '../../Components/NewLesson/NewLesson';

function CourseDetailPage(props) {
  const { courseId, course, loading } = props;
  if(loading) {
    return <Loading />
  }

  if(!course) {
    return <NotFoundPage />
    // return <Redirect noThrow to="/" />
  }

  return (
    <div className={styles.detailsWrapper}>
       <header className={styles.header}>
          {course.name}
       </header>
       <div className={styles.content}>
         <NewLesson />
       </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.coursesLoading,
  course: state.courses.find(c => c.id === parseInt(ownProps.courseId, 10)),
})

export default connect(mapStateToProps)(CourseDetailPage);
