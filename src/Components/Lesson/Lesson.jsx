import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteLesson } from '../../Redux/actions';
import styles from './NewLesson.module.css';


function Lesson(props) {

  const { onSubmit, lesson, children, deleteLesson } = props;   

  const initialValue = lesson ? lesson.name : '';

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(initialValue);

  const inputRef = useRef();

  function reset(){
    setTitle(initialValue);
    setEditing(false);
  }

  function beginEditing() {
    setEditing(true);
  }

  function perfomDelete() {
    deleteLesson(lesson)
  }

  function commitEdit(e) {
    e.preventDefault();
    onSubmit(title);
    // addLesson(title, courseId);
    reset();
  }


  useEffect(() => {
    if(editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  return (
    editing ? (
      <form className={styles.editForm} onSubmit={commitEdit}>
          <input
            ref={inputRef} 
            type="text" 
            value={title}
            onChange={e => setTitle(e.target.value)}
            onBlur={reset}
            placeholder="Name the lesson"
          />
      </form>
    ) : (
      children(beginEditing, perfomDelete)
      // <button className={styles.newLessonBtn} onClick={() => setEditing(true)} >New Lesson</button>
    )
  );
}

export default connect(null, { deleteLesson })(Lesson);