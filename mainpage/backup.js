"use strict";
// this is where the AJAX logic is
// function getWeburl(weburl) {
//   fetch("https://faceebook.com")
//     .then((response) => response.jason())
//     .then((responseJason) => console.log(responseJason));
// }

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
// watch for clinte submitting the form
// function watchForm() {
//   $("form").submit((event) => {
//     event.preventDefault();
//     getWeburl();
//   });
// }
//fetch render div elment title rating discrpiit hide
//click
$(function () {
  console.log("loading pls wait!");
  getbookmark();
  render();
});
