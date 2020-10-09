let js_quote = document.querySelector(".js_quote");
let js_quote_nav = document.querySelector(".js_quote-nav");

js_quote.childNodes.forEach((elem, i) => {
    if(elem.classList) {
        let dot = document.createElement("div");
        if(i === 1)
            dot.className = "js_quote_nav_dot js_dot_active";
        else
            dot.className = "js_quote_nav_dot";
        dot.addEventListener("click", () => {
            js_quote.childNodes.forEach((elem) => {
                if(elem.classList)
                    elem.classList.remove("js_quote_block_active");
            });
            js_quote_nav.childNodes.forEach((elem) => {
                if(elem.classList)
                    elem.classList.remove("js_dot_active");
            });
            js_quote.childNodes[i].classList.add("js_quote_block_active");
            dot.classList.add("js_dot_active");
        });
        js_quote_nav.appendChild(dot);
    }
});