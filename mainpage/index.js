"use strict";
const userbookmark = {};
//Form generate and Handler
function addbookmarkbtn() {
  $("#add-btn").click((event) => {
    event.preventDefault();

    $(".displayForm").css("display", "flex");
    $("#hide-top-menu").css("display", "none");
  });
}
//Add Bookmark handler
console.log(document.getElementById("submit"));
const BASEURL = "https://thinkful-list-api.herokuapp.com/misrak/bookmarks";
function getfromData() {
  $("form").submit((event) => {
    console.log("clicked");
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
        displayuserBookmark();
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

//Form Generate and Handler ---------- END -----------  Form Generate and Handler

//User Bookmark Display Handler ---------- Start----------- User Bookmark Display Handler

function generateaddedbookmark(item) {
  //rating >
  let rating;
  //item.rating 1-5 r ==1 raitng <>
  //switch

  switch (item.rating) {
    case 1:
      return `<div data-item-id=${item.id} id='bookmark-container' class="displaybookmark">
            <div> <button id='btn-${item.id}' toggled= false onclick={slider("${item.id}")} class='bookmark-toggler'><span class='down-btn-${item.id}'>&#9660;</span><span class='up-btn-${item.id} down'>&#9650;</span> </button></div>
             <div >
              <p>${item.title}</p>
            </div>
            <div>    
            <p>&#9733&#9734&#9734&#9734&#9734</p>
            </div>
            </div>
          <div class='slider-${item.id} slider-conatiner'>
          <div><p>${item.desc}</p></div>
         <div><a href=${item.url}>Vist Site</a></div>
            </div>`;

    case 2:
      return `<div id=${item.id} id='bookmark-container' class="displaybookmark">
         <div> <button id='btn-${item.id}' toggled= false onclick={slider("${item.id}")} class='bookmark-toggler'><span class='down-btn-${item.id}'>&#9660;</span><span class='up-btn-${item.id} down'>&#9650;</span> </button></div>     
      <div>
              <p>${item.title}</p>
            </div>
            <div>    
            <p>&#9733&#9733&#9734&#9734&#9734</p>
            </div>
          </div>`;

    case 3:
      return `<div id=${item.id} id='bookmark-container' class="displaybookmark">
         <div> <button id='btn-${item.id}' toggled= false onclick={slider("${item.id}")} class='bookmark-toggler'><span class='down-btn-${item.id}'>&#9660;</span><span class='up-btn-${item.id} down'>&#9650;</span> </button></div>      
      <div>
              <p>${item.title}</p>
            </div>
            <div>    
            <p>&#9733&#9733&#9733&#9734&#9734</p>
            </div>
          </div>`;
    case 4:
      return `<div id=${item.id} id='bookmark-container' class="displaybookmark">
         <div><button id='btn-${item.id}' toggled= false onclick={slider("${item.id}")} class='bookmark-toggler'><span class='down-btn-${item.id}'>&#9660;</span><span class='up-btn-${item.id} down'>&#9650;</span> </button></div>     
      <div>
           <p>${item.title}</p>
            </div>
            <div>    
            <p>&#9733&#9733&#9733&#9733&#9734</p>
            </div>
          </div>`;
    case 5:
      return `<div id=${item.id} id='bookmark-container' class="displaybookmark">
         <div> <button id='btn-${item.id}' toggled= false onclick={slider("${item.id}")} class='bookmark-toggler'><span class='down-btn-${item.id}'>&#9660;</span><span class='up-btn-${item.id} down'>&#9650;</span> </button></div>     
      <div>
              <p>${item.title}</p>
            </div>
            <div>    
            <p>&#9733&#9733&#9733&#9733&#9733</p>
            </div>
          </div>`;
    default:
      return `<div id=${item.id} id='bookmark-container' class="displaybookmark">
         <div><button id='btn-${item.id}' toggled= false onclick={slider("${item.id}")} class='bookmark-toggler'><span class='down-btn-${item.id}'>&#9660;</span><span class='up-btn-${item.id} down'>&#9650;</span> </button></div>     
          <div>
            <p>${item.title}</p>
            </div>
            <div>    
            <p>&#9734&#9734&#9734&#9734&#9734</p>
            </div>
          </div>`;
  }
}
const generateuserbookmark = function (bookamrkList) {
  const items = bookamrkList.map((item) => generateaddedbookmark(item));
  const final = items.join("");
  return final;
};
//GET JSON // POST JSON.Stringfy
function displayuserBookmark() {
  fetch("https://thinkful-list-api.herokuapp.com/misrak/bookmarks/")
    .then((data) => data.json())
    .then((bookamrkList) =>
      $(".bookmark-box").html(generateuserbookmark(bookamrkList))
    );

  //Call generate  user book mark function
}
//Create Slider Handler ----- START

const getItemIdFromElement = function (item) {
  return $(item).closest(".displaybookmark").data("item-id");
};
function slider(id) {
  fetch("https://thinkful-list-api.herokuapp.com/misrak/bookmarks/")
    .then((data) => data.json())
    .then((bookamrkList) => {
      let item = bookamrkList.filter((ite) => ite.id === id);
      //slider desc
      console.log(item[0]);
    });

  let test = $(`#btn-${id}`).attr("toggled");
  if (test == "false") {
    $(`.up-btn-${id}`).css("display", "block");
    $(`.down-btn-${id}`).css("display", "none");
    $(`#btn-${id}`).attr("toggled", "true");
    $(`.slider-${id}`).css("display", "flex");
  } else if (test == "true") {
    $(`.up-btn-${id}`).css("display", "none");
    $(`.down-btn-${id}`).css("display", "block");
    $(`#btn-${id}`).attr("toggled", "false");
    $(`.slider-${id}`).css("display", "none");
  }
}

//Create Slider Handler ----- END

//DOM function
$(function () {
  addbookmarkbtn();
  displayuserBookmark();
  getfromData();
  slider();
});
