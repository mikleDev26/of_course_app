import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../Redux/actions';
import styles from './CourseListPage.module.css';


function CourseListPage(props) {
  const { courses, dispatch } = props;
  const [courseName, setCourseName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addCourse(courseName));
    setCourseName('');
  }
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Create your first course</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
              <input 
                className={styles.input}
                value={courseName} 
                onChange={(e) => setCourseName(e.target.value)} 
                type='text'
                placeholder='enter course name'
              />
          </div>
          <input className={styles.submitBtn} type="submit" value="Create Course" />
        </form>  
      </div>
      { courses.length === 0 ? (
        <center>
          <p>There are no courses so far</p>
        </center>
       ) : (
        <div>
          <ul className={styles.coursesList}>
            {courses.map(course => (
              <li className={styles.courseItem} key={course.id}>{course.name}</li>)
            )}
          </ul>
        </div>
      )
    }
    </div>
  );
}

const mapStateToProps = (state) => ({
  courses: state.courses,
});

export default connect(mapStateToProps)(CourseListPage)

