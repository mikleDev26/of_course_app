import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../../Redux/actions';
import Loading from '../Loading/Loading';
import styles from './NewCourse.module.css';

function NewCourse(props) {
  const { loading, dispatch } = props;

  const [courseName, setCourseName] = useState('');
  const [price, setPrice] = useState('');

  const inputRef = useRef();

  function handleSubmit(e) {
    if(loading) return;
    e.preventDefault();
    dispatch(addCourse(courseName, price));
    setCourseName('');
    setPrice('');
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <div className={styles.NewCourse}>
         <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="courseName">Course name:</label>
              <input 
                id="courseName"
                ref={inputRef}
                disabled={loading}
                className={styles.input}
                value={courseName} 
                onChange={(e) => setCourseName(e.target.value)} 
                type='text'
                placeholder='enter course name'
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="coursePrice">Course price:</label>
              <input 
                id="coursePrice"
                type="number"
                className={styles.input}
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                placeholder='$'
              />
            </div>
            <button className={styles.submitBtn} type="submit">
             {
               loading ? <Loading tiny /> : 'Create Course'
             } 
            </button>
            
          </form>  
    </div>
  );
}

const mapStateToProps = (state) => ({
  coursesLoading: state.courses.coursesLoading,
  coursesError: state.courses.coursesError,
  loading: state.courses.fetching,
});

export default connect(mapStateToProps)(NewCourse);
