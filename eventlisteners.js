
//------what events happen and how to handle them-----//


//------Add BTN------------//
function addbookmarkbtn() {
  $("#add-btn").click((event) => {
    event.preventDefault();

    $(".displayForm").css("display", "flex");
    $("#hide-top-menu").css("display", "none");
  });
}

//------Delete BTN-----------//

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

//------Fillter BTN---------//

function fillterHandler() {
  const selected = document.querySelector("#fillter-rating");

  selected.addEventListener("click", function () {
    const res = $("#rating").val();
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

//------ Slider BTN--------//

function slider(id) {
  fetch("https://thinkful-list-api.herokuapp.com/misrak/bookmarks/")
    .then((data) => data.json())
    .then((bookamrkList) => {
      let item = bookamrkList.filter((ite) => ite.id === id);
      let test = $(`#btn-${id}`).attr("toggled");

      //To Hide Discription
      if (test == "false") {
       
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


