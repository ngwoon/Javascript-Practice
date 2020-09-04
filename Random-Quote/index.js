function makeBtn() {
    const btnDiv = document.querySelector(".menu");
    const btn = document.createElement("input");
    btn.type = "button";
    btn.value = "Other Quotes";
    btn.classList.add("button");
    btn.addEventListener("click", function() {
        location.reload();
    });
    btnDiv.appendChild(btn);
}

function getQuote() {
    fetch("https://api.quotable.io/random").then(response => response.json())
    .then(data => {
        const quote = document.querySelector(".js-quote");
        quote.innerHTML = `
            <hr/>
            <div class="quote-content">
                ${data.content}
            </div>
            <br/>
            <div class="quote-author">
                by ${data.author}
            </div>
            <hr/>
        `;

        makeBtn();
    });
}

function init() {
    fetch("https://api.unsplash.com/photos/random/?client_id=bS6Mcj574RjNJEwIEl81OVOBfSJjaEMIvBTnYpRLmWE&query=bright background").then(response => response.json())
    .then(json => {
        const bgImg = new Image();
        bgImg.classList.add("bgImage");
        bgImg.src = json.urls.full;
        bgImg.onload = function() {
            document.body.prepend(bgImg);
            getQuote();
        };
    });
}

init();