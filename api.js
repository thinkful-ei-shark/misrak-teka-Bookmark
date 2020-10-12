//----when and how to store and display the data----//

//-------Bookmark Storage-------//
function getfromData() {
  $("form").submit((event) => {
    console.log("clicked");
    event.preventDefault();
    const store = {};

    let bookmarkname = $("#name").val();
    let bookmarkurl = $("#url").val();
    let bookmarkdesc = $("#web-description").val();
    let bookmarkrating = parseInt($("#rating").val());

    if (bookmarkname.length > 0 && bookmarkurl.length > 0 && bookmarkdesc.length > 0) {
      store.title = bookmarkname;
      store.url = bookmarkurl;
      store.desc = bookmarkdesc;
      store.rating = bookmarkrating;
      console.log(JSON.stringify(store));

      let body = JSON.stringify(store);
      
      fetch(`${BASEURL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      })
        .then((response) => {
          $(".error").css("display", "none");

            $("#name").val('');
            $("#url").val('');
            $("#web-description").val('');
 
          displayuserBookmark();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const errormsg = document.querySelector(".error");
      $(".error").css("display", "block");
    }

  });
}


//--------Bookmark Displayer-----//
function displayuserBookmark() {
  fetch("https://thinkful-list-api.herokuapp.com/misrak/bookmarks/")
    .then((data) => data.json())
    .then((bookamrkList) => $(".bookmark-box").html(generateuserbookmark(bookamrkList)));
}

