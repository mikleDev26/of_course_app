import React from 'react';
import { connect } from 'react-redux';
import LessonEditor from '../../Components/LessonEdditor/LessonEditor';
import ReactMarkdown from 'react-markdown';

function LessonPage(props) {
 const { lesson, previewMode } = props;
  return (
    <>
    {previewMode ? 
      (<ReactMarkdown source={lesson.markdown || ''} />
        ) : (
        <LessonEditor lesson={lesson} />
      )}
     </>
  )
}


const mapStateToProps = (state, props) => {
  const lessonId = parseInt(props.lessonId, 10);
  return {
    lesson: state.lessons.lessons[lessonId],
    loading: state.lessons.loading,
    previewMode: state.mode.previewMode,
  };
} 

export default connect(mapStateToProps)(LessonPage)
