import React from 'react';
import styles from './LessonEditor.module.css';
import { setLessonMarkDown } from '../../Redux/actions';
import { connect } from 'react-redux';

function LessonEditor(props) {
  const { lesson, setLessonMarkDown } = props; 

  return (
    <>
      <div className={styles.lessonEditorHelp}>
        <p>
          You are editing this lesson. Changes are saved automaticly.
        </p>
      </div>
      <textarea 
        className={styles.lessonEditor} 
        value={lesson.markdown}
        onChange={e => setLessonMarkDown(lesson, e.target.value)}  
      />
    </>
  )
}

export default connect(undefined, { setLessonMarkDown })(LessonEditor)
