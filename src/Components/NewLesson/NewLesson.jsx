import React, { useState, useRef, useEffect } from 'react';
import { addLesson } from '../../Redux/actions';
import { connect } from 'react-redux';
import styles from './NewLesson.module.css';


function NewLesson(props) {
  const { addLesson, courseId } = props;   
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('');

  const inputRef = useRef();

  function reset(){
    setTitle('');
    setEditing(false);
  }

  function commitEdit(e) {
    e.preventDefault();
    addLesson(title, courseId);
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
      <button className={styles.newLessonBtn} onClick={() => setEditing(true)} >New Lesson</button>
    )
  );
}

export default connect(null, { addLesson })(NewLesson);