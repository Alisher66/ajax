

function getUsers() {
    const url = "https://randomuser.me/api/?results=7";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.send()

    xhr.onload = function () {
        let res = xhr.response;
        rendor(res.results)
    }
}

function show() {
    getUsers();
    window.addEventListener("scroll", (e) => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            getUsers();
        }
    })

}

function rendor(users) {
    console.log(users);
    const container = document.querySelector(".user__container");
    let htmlEl = users.map(user => {
        return `
            <div class="item">
                <div class="item__img">
                    <img src="${user.picture.medium}" alt="">
                </div>
                <div class="item__content">
                    <p class="user-name">${user.login.username}</p>
                    <p class="user-email">${user.email}</p>
                </div>
            </div>
            `;
    });

    container.innerHTML += htmlEl.join("");
}

show();





