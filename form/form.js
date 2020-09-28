"use strict";
const BASEURL = "https://thinkful-list-api.herokuapp.com/misrak/bookmarks/";
function getfromData() {
  $("form").submit((event) => {
    event.preventDefault();
    const store = {};

    let bookmarkname = $("#name").val();
    let bookmarkurl = $("#url").val();
    let bookmarkdesc = $("#web-description").val();
    let bookmarkrating = parseInt($("#rating").val());
    store.title = bookmarkname;
    store.url = bookmarkurl;
    store.desc = bookmarkdesc;
    store.rating = bookmarkrating;
    console.log(store);
    fetch(`${BASEURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(store),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

$(function () {
  getfromData();
});
