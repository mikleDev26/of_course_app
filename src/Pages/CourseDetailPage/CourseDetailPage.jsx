import React, { useEffect }  from 'react';
import { Redirect, Link, Match } from '@reach/router';
import { connect } from 'react-redux';
import Loading from '../../Components/Loading/Loading';
import NotFoundPage from '../NotFoundPage';
import { loadLessons, loadCourses, addLesson, saveLesson} from '../../Redux/actions';

// Selectors
import { getLessonsByCourse, getCourseById } from '../../Redux/selectors';

import styles from './CourseDetailPage.module.css';
import Lesson from '../../Components/Lesson/Lesson';

function CourseDetailPage(props) {
  const { courseId, 
          course, 
          loadCourses, 
          loadingCourse, 
          lessons, 
          loadLessons, 
          addLesson, 
          loadingLessons,
          saveLesson,
          children, } = props;

  useEffect(() => {
    loadCourses();
    loadLessons(courseId);
  }, [courseId, loadCourses, loadLessons])

  if(loadingCourse || loadingLessons) {
    return <Loading />
  }

  // if(!course) {
  //   return <NotFoundPage />
  //   // return <Redirect noThrow to="/" />
  // }

  console.log('COURSE', course)

  return (
    <div className={styles.detailsWrapper}>
       <header className={styles.header}>
          {course && course.name}
       </header>
       <div className={styles.content}>
         {lessons.length > 0 && (
           <ul className={styles.lessons}>
             {lessons.map(lesson => (
               <Match key={lesson.id} path={`lessons/${lesson.id}`}>
                 {({ match }) => {
                 const className = `${styles.lessonsItem} ${match ? styles.selected : ''}`
                   return (
               <li>
                <Lesson  
                  lesson={lesson} 
                  className={className}
                  onSubmit={name => 
                    saveLesson({
                      ...lesson,
                      name,
                    })
                  }
                  >
                  {(edit, remove) => 
                  (<div className={className}>
                    <Link to={`lessons/${lesson.id}`}>{lesson.name}</Link>
                    <button onClick={() => edit(lesson.name)} className={styles.editLessonBtn}>Edit</button>
                    <button onClick={remove} className={styles.deleteLessonBtn}>Delete</button>
                  </div>)}
                </Lesson>
               </li> 
               )
               }}
               </Match>
             ))}
           </ul>
         )}
         <Lesson onSubmit={title => addLesson(title, courseId)} className={styles.newLessonBtn}>
           {(edit) => (
             <button className={styles.newLessonBtn} onClick={edit} >New Lesson</button>
           )}
         </Lesson>
         <div>
           {children}
         </div>
       </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    loadingLessons: state.lessons.gettingLessons,
    loadingCourse: state.courses.coursesLoading,
    lessons: getLessonsByCourse(state, ownProps),
    course: getCourseById(state, ownProps),
  }
}

export default connect(mapStateToProps, {loadLessons, loadCourses, addLesson, saveLesson})(CourseDetailPage);
