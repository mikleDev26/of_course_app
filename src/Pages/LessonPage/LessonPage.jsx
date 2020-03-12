import React from 'react';
import { connect } from 'react-redux';
import LessonEditor from '../../Components/LessonEdditor/LessonEditor';

function LessonPage(props) {
 const { lesson } = props;

  return <LessonEditor lesson={lesson} />
}


const mapStateToProps = (state, props) => {
  const lessonId = parseInt(props.lessonId, 10);
  return {
    lesson: state.lessons.lessons[lessonId],
    loading: state.lessons.loading
  };
} 

export default connect(mapStateToProps)(LessonPage)
