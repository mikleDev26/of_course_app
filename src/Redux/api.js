

export function createCourse(name) {
  return postData('http://localhost:8080/courses', { name }, 'POST');
}


async function postData(url = ``, data = {}, method = 'POST') {
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(response => response.json())
}