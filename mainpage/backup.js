"use strict";

function getbookmark(url) {
  fetch("https://thinkful-list-api.herokuapp.com/misrak/bookmarks")
    .then((response) => response.json())
    .then((responseJason) => console.log(responseJason));
}
// Fetch bookmark data
function render() {
  store = {};
  fetch("https://thinkful-list-api.herokuapp.com/misrak/bookmarks")
    .then((response) => (store = response))
    .then((error) => {
      console.log(error);
    });

  console.log(store);
}

$(function () {
  console.log("loading pls wait!");
  getbookmark();
  render();
});
