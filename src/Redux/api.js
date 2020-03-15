
import axios from 'axios';
const PREFIX = '/api'

export const loginUser = (userName, passsword) => {
  return postData(PREFIX + '/login', {
    userName, passsword,
  })
};

export const createUser = (userName, passsword) => {
  console.log('CREATE USER', userName)
  return postData(PREFIX + '/users', {
    userName, passsword
  })
}

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
 async function postData(url = ``, data) {
    const response = await axios.post(url, {
     method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      }});
    return response;
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


// function handleErrors(response) {
//   if(!response.ok) {
//      return response.json().then(body => {
//        throw new Error(body.message);
//      });
//   } else {
//     return response;
//   }
// }