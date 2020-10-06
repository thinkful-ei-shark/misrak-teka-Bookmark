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
            <div> <button id='btn-${item.id}' toggled=true onclick={slider("${item.id}")} class='bookmark-toggler'><span class='down-btn-${item.id} down'>&#9660;</span><span class='up-btn-${item.id} '>&#9650;</span> </button></div>
             <div >
              <p>${item.title}</p>
            </div>
            <div>    
            <p>&#9733&#9734&#9734&#9734&#9734</p>
            </div>
            <div> <button onclick={deletehandler("${item.id}")} class='delete'>&#10060</button></div>
            </div>
            <div class='slider-conatiner view-box-${item.id}'></div>
          `;

    case 2:
      return `<div id=${item.id} id='bookmark-container' class="displaybookmark">
         <div> <button id='btn-${item.id}' toggled=true onclick={slider("${item.id}")} class='bookmark-toggler'><span class='down-btn-${item.id} down'>&#9660;</span><span class='up-btn-${item.id} '>&#9650;</span> </button></div>     
      <div>
              <p>${item.title}</p>
            </div>
            <div>    
            <p>&#9733&#9733&#9734&#9734&#9734</p>
            </div>
             <div> <button  onclick={deletehandler("${item.id}")} class='delete'>&#10060</button></div>
          </div>
        <div class='slider-conatiner view-box-${item.id}'>
         
       </div> `;

    case 3:
      return `<div id=${item.id} id='bookmark-container' class="displaybookmark">
         <div> <button id='btn-${item.id}' toggled=true onclick={slider("${item.id}")} class='bookmark-toggler'><span class='down-btn-${item.id} down'>&#9660;</span><span class='up-btn-${item.id} '>&#9650;</span> </button></div>      
      <div>
              <p>${item.title}</p>
            </div>
            <div>    
            <p>&#9733&#9733&#9733&#9734&#9734</p>
            </div>
             <div> <button  onclick={deletehandler("${item.id}")} class='delete'>&#10060</button></div>
          </div>
          <div class='slider-conatiner view-box-${item.id}'></div>`;
    case 4:
      return `<div id=${item.id} id='bookmark-container' class="displaybookmark">
         <div><button id='btn-${item.id}' toggled=true onclick={slider("${item.id}")} class='bookmark-toggler'><span class='down-btn-${item.id} down'>&#9660;</span><span class='up-btn-${item.id} '>&#9650;</span> </button></div>     
      <div>
           <p>${item.title}</p>
            </div>
            <div>    
            <p>&#9733&#9733&#9733&#9733&#9734</p>
            </div>
             <div> <button onclick={deletehandler("${item.id}")} class='delete'>&#10060</button></div>
          </div>
            <div class='slider-conatiner view-box-${item.id}'></div>`;
    case 5:
      return `<div id=${item.id} id='bookmark-container' class="displaybookmark">
         <div> <button id='btn-${item.id}' toggled=true onclick={slider("${item.id}")} class='bookmark-toggler'><span class='down-btn-${item.id} down'>&#9660;</span><span class='up-btn-${item.id} '>&#9650;</span> </button></div>     
      <div>
              <p>${item.title}</p>
            </div>
            <div>    
            <p>&#9733&#9733&#9733&#9733&#9733</p>
            </div>
             <div> <button onclick={deletehandler("${item.id}")} class='delete'>&#10060</button></div>
          </div>
            <div class='slider-conatiner view-box-${item.id}'></div>`;
    default:
      return `<div id=${item.id} id='bookmark-container' class="displaybookmark">
         <div><button id='btn-${item.id}' toggled=true onclick={slider("${item.id}")} class='bookmark-toggler'><span class='down-btn-${item.id} down'>&#9660;</span><span class='up-btn-${item.id} '>&#9650;</span> </button></div>     
          <div>
            <p>${item.title}</p>
            </div>
            <div>    
            <p>&#9734&#9734&#9734&#9734&#9734</p>
            </div> <div> <button onclick={deletehandler("${item.id}")} class='delete'>&#10060</button></div>
          </div>
            <div class='slider-conatiner view-box-${item.id}'></div>`;
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
    .then((bookamrkList) => $(".bookmark-box").html(generateuserbookmark(bookamrkList)));

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
      let test = $(`#btn-${id}`).attr("toggled");
      //Hide Discription
      if (test == "false") {
        //Hide Discription
        $(`.up-btn-${id}`).css("display", "block");
        $(`.down-btn-${id}`).css("display", "none");
        $(`#btn-${id}`).attr("toggled", "true");
        $(`.slider-${id}`).css("display", "flex");

        // this will hide the information input from the DOM
        const divtoggled = document.querySelector(`.view-box-${id}`);
        divtoggled.innerHTML = ``;
      } else if (test == "true") {
        //Show Discription
        $(`.up-btn-${id}`).css("display", "none");
        $(`.down-btn-${id}`).css("display", "block");
        $(`#btn-${id}`).attr("toggled", "false");
        $(`.slider-${id}`).css("display", "none");

        // this will show the information input from the DOM
        const divtoggled = document.querySelector(`.view-box-${id}`);
        divtoggled.innerHTML = `<section class='view-box'>
          <div><a href=${item[0].url}>Vist Site</a></div>
          <div><span>${item[0].rating}</span></div>
          </section>
          <div><p>${item[0].desc}</p></div>`;
      }
    });
}

function deletehandler(id) {
  //fetch to delete with method delete and pass the id
  // fetch('url',option).then(output)
  //fetch('urladdress'
  // method: ;ld;FileReader;

  //})

  fetch(`https://thinkful-list-api.herokuapp.com/misrak/bookmarks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json)
    .then((response) => displayuserBookmark());
}

//Create Slider Handler ----- END
//Fillter

function fillterHandler() {
  const selected = document.querySelector("#fillterrating");
  selected.addEventListener("click", function () {
    const res = $("#fillterrating").val();
    if (res == "1" || res == "2" || res == "3" || res == "4" || res == "5") {
      fetch("https://thinkful-list-api.herokuapp.com/misrak/bookmarks/")
        .then((data) => data.json())
        .then((data) => {
          const result = data.filter((item) => item.rating === parseInt(res));
          $(".bookmark-box").html(generateuserbookmark(result));
        });
    }
  });
}

//DOM function
$(function () {
  addbookmarkbtn();
  displayuserBookmark();
  getfromData();
  slider();
  fillterHandler();
});
