import React, { useState } from 'react';
import styles from './NewLesson.module.css';

export default function NewLesson() {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('');

  return (
    editing ? (
      <form className={styles.editForm}>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
      </form>
    ) : (
      <button className={styles.newLessonBtn} onClick={() => setEditing(true)} >New Lesson</button>
    )
  );
}
