import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router'; 
import Modal from 'react-modal';
import styles from './CourseListPage.module.css';
import Loading from '../Components/Loading/Loading';
import { loadCourses, openNewCourseModal, closeNewCourseModal } from '../Redux/actions';
import NewCourse from '../Components/NewCourse/NewCourse';



function CourseListPage(props) {
  const { 
    courses, 
    coursesLoading,
    coursesError,
    isModalOpen,
    openNewCourseModal,
    closeNewCourseModal,
    loadCourses,
     } = props;

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  console.log(isModalOpen);

  if(coursesLoading) {
    return <Loading small />;
  }

  return (
    <div className={styles.wrapper}>
      {!courses.length ? (
        <NewCourse />
      ) : (
        <div className={styles.courseListWrapper}>
          <h1>Your coursers</h1>
          <button className={styles.newCourseBtn} onClick={openNewCourseModal}>new course</button>
          <ul className={styles.coursesList}>
            {courses.map(course => (
              <Link to={`/courses/${course.id}`}  key={course.id}>
              <li className={styles.courseItem}>
                <span>{course.name}</span>
                <span className={styles.price}>{course.price} $</span>
              </li>
              </Link>
            )
            )}
          </ul>
          <Modal portalClassName={styles.modal} isOpen={isModalOpen} onRequestClose={closeNewCourseModal}>
            <NewCourse />
          </Modal>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  courses: state.courses.courses,
  loading: state.courses.fetching,
  coursesLoading: state.courses.coursesLoading,
  coursesError: state.courses.coursesError,
  isModalOpen: state.courses.newCourseModalOpen,
});

const mapDispatch = {
  openNewCourseModal,
  loadCourses,
  closeNewCourseModal,
}

export default connect(mapStateToProps, mapDispatch)(CourseListPage)

