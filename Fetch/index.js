console.log("run");

function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err))
}

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'ADD_USER',
    body: 'Lahiru Mudith',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
}

function loadUpdateData() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'Update User',
    body: 'Mudith madushan',
    userId: 2,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function loadDeleteData() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}