let hamburger = document.querySelector(".js_hamburger");
hamburger.addEventListener("click", () => {
    let menu = document.querySelector(".nav__wrapper");
    menu.classList.toggle("js_hidden");
});

window.addEventListener('scroll', function(e) {
    if(document.querySelector(".js__navPos").getBoundingClientRect().y < -500) {
        let menu = document.querySelector(".nav__wrapper");
        menu.style.position = "fixed";
        menu.style.top = "0px";
    }
    else {
        let menu = document.querySelector(".nav__wrapper");
        menu.style.position = "relative";
        menu.style.top = "0px";
    }
});