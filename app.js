const formWrapper = document.querySelector('.form-wrapper');
const form = document.querySelector('#form');
const searchInput = document.querySelector("#searchInput");

const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imagelist-wrapper");

runEventListener();

function runEventListener() {
    form.addEventListener("submit", search);

}

function search(e) {
    // 

    const searchValue = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${searchValue}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID nts6xI_lt7ibYFWuDNiAAuShRZMg1N9VHcs-n8B8hhY"
        }
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

    e.preventDefault();
}