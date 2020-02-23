

export function createCourse(name) {
  return handleFetch('/courses', { name }, 'POST');
}

export function getCourses() {
  return handleFetch('/courses', {}, 'GET' );
}

// the old way whith then
 function postData(url = ``, data = {}, method = 'POST') {
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(response => response.json())
}

// the new way with async await
export async function handleFetch(url = ``, data = {}, method = 'POST') {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}
