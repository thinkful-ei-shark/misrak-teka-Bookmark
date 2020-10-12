
const BASEURL = "https://thinkful-list-api.herokuapp.com/misrak/bookmarks";

function addbookmarkbtn() {
  $("#add-btn").click((event) => {
    event.preventDefault();

    $(".displayForm").css("display", "flex");
    $("#hide-top-menu").css("display", "none");
  });
}


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

//fetch to delete with method delete and pass the id
// fetch('url',option).then(output)
//fetch('urladdress')

function deletehandler(id) {

  fetch(`https://thinkful-list-api.herokuapp.com/misrak/bookmarks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json)
    .then((response) => displayuserBookmark());
}

//------Fillter---------//

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
    else if(res == "All"){
       
        fetch("https://thinkful-list-api.herokuapp.com/misrak/bookmarks/")
        .then((data) => data.json())
        .then((data) => {
    
          $(".bookmark-box").html(generateuserbookmark(data));
        });
    }
    
  });
}

const getItemIdFromElement = function (item) {
  return $(item).closest(".displaybookmark").data("item-id");
};

//------ slider--------//

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
          <div><a href=${item[0].url}  target='_blank'>Vist Site</a></div>
          <div><span>${item[0].rating}</span></div>
          </section>
          <div><p>${item[0].desc}</p></div>`;
      }
    });
}


