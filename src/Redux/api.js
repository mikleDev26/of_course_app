

const PREFIX = '/api'

export const createCourse = (name, price) => postData(PREFIX + '/courses', { name, price }, 'POST');

export const getCourses = () => getData('/courses');

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
