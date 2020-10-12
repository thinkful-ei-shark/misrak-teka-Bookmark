function displayuserBookmark() {
  fetch("https://thinkful-list-api.herokuapp.com/misrak/bookmarks/")
    .then((data) => data.json())
    .then((bookamrkList) => $(".bookmark-box").html(generateuserbookmark(bookamrkList)));

  //Call generate  user book mark function
}