"use strict";
const userbookmark = {};

const BASEURL = "https://thinkful-list-api.herokuapp.com/misrak/bookmarks";

//------- How to fill the form with rating works-----//
function generateaddedbookmark(item) {

  let rating;
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


//------------How to generate the form data--------------//
const generateuserbookmark = function (bookamrkList) {
  const items = bookamrkList.map((item) => generateaddedbookmark(item));
  const final = items.join("");
  return final;
};

//-----------How to identify the data------------//
const getItemIdFromElement = function (item) {
  return $(item).closest(".displaybookmark").data("item-id");
};

//DOM function

$(function () {
  addbookmarkbtn();
  displayuserBookmark();
  getfromData();
  slider();
  fillterHandler();
});
