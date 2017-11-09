function closePopup (closeLink, popup){
    closeLink.addEventListener("click", function(event){
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        if (popup.classList.contains("modal-error")){
            popup.classList.remove("modal-error");
        };
        overlay.classList.remove("modal-overlay-show");
    });
    window.addEventListener("keydown", function(event){
        if (event.keyCode === 27){
            if (popup.classList.contains("modal-content-show")){
                popup.classList.remove("modal-content-show");
                if (popup.classList.contains("modal-error")){
                    popup.classList.remove("modal-error")
                };
                overlay.classList.remove("modal-overlay-show");
            };
        };
    });
};

//Login form
var link = document.querySelector(".login");
var popup= document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");
//
var storage = localStorage.getItem("login");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
//
closePopup(close, popup);
closePopup(overlay, popup);

link.addEventListener("click", function(event){
    event.preventDefault();           
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");
    login.focus();
    if (storage){
        login.value = storage;
        password.focus();
    };
});

form.addEventListener("submit", function(event){            
    if (!login.value || !password.value){
        event.preventDefault();
        popup.classList.add("modal-error");                
    } else {
        localStorage.setItem("login", login.value);
    };
});

//Map

var mapLink = document.querySelector(".js-open-map");
var mapPopup= document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
var mapOverlay = document.querySelector(".modal-overlay");

mapLink.addEventListener("click", function(event){
    event.preventDefault();           
    mapPopup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");
});

var mapLink2 = document.querySelector(".js-open-map-2");
mapLink2.addEventListener("click", function(event){
    event.preventDefault();           
    mapPopup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");
});

closePopup( mapClose, mapPopup);
closePopup( mapOverlay, mapPopup);