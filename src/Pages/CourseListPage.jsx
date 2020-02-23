import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../Redux/actions';
import styles from './CourseListPage.module.css';
import Loading from '../Components/Loading/Loading';


function CourseListPage(props) {
  const { courses, dispatch, loading } = props;
  const [courseName, setCourseName] = useState('');

  function handleSubmit(e) {
    if(loading) return;
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
          <button className={styles.submitBtn} type="submit">
           {
             loading ? <Loading tiny /> : 'Create Course'
           } 
          </button>
          
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
  loading: state.fetching,
});

export default connect(mapStateToProps)(CourseListPage)

