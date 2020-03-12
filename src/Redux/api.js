

const PREFIX = '/api'

export const createCourse = (name, price) => {
   return postData(PREFIX + '/courses', { name, price });
 };
 export const createLesson = (name, courseId) => {
   const newLesson = {
     name,
     courseId,
     markdown: '',
   };
   return postData(PREFIX + '/lessons', newLesson);
 }

export const getCourses = () => getData('/courses');
export const getLessons = (id) => getData('/lessons?courseId=' + id);


export const updateLesson = (lesson) => {
  return putData(PREFIX + `/lessons/${lesson.id}`, lesson);
}

export const destroyLesson = (lesson) => deleteData(PREFIX + `/lessons/${lesson.id}`)

// the old way whith then
 function postData(url = ``, data = {}) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(response => response.json())
}


async function putData(url = ``, data = {}) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

async function deleteData(url = ``, data = {}) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

async function getData(url = ``) {
  const response = await fetch(PREFIX + url);
  const result = await response.json();
  return result;
}
