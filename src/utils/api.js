const baseUrl = "http://localhost:3001";
const headers = { "Content-Type": "application/json" };

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function deleteItem(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: headers,
  }).then((res) => {
    return checkResponse(res);
  });
}

function addItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then((res) => {
    return checkResponse(res);
  });
}

export { getItems, deleteItem, addItem, checkResponse };
