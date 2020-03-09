

const PREFIX = '/api'

export const createCourse = (name, price) => {
   return postData(PREFIX + '/courses', { name, price }, 'POST');
 };

export const getCourses = () => getData('/courses');
export const getLessons = () => getData('/lessons');

export const createLesson = (name, courseId) => {
  return postData('/lessons', {name, courseId}, 'POST')
}

// the old way whith then
 function postData(url = ``, data = {}, method = 'POST') {
  return fetch(PREFIX + url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(response => response.json())
}


async function getData(url = ``) {
  const response = await fetch(PREFIX + url);
  const result = await response.json();
  return result;
}
