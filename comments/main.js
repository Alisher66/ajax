const container = document.querySelector(".user__container");

function getUsers(postId = 1) {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.send()

    xhr.onload = function () {
        let res = xhr.response;
        rendor(res);
    }
}

function show() {
    getUsers();
    let i = 1;
   
    window.addEventListener("scroll", (e) => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            i++;
            getUsers(i);
        }
    })
}

function rendor(users) {
    console.log(users);

    let htmlEl = users.map(user => {
        return `
            <div class="item">
                <div class="item__content">
                    <p class="user-email">${user.email}</p>
                    <p class="user-name">${user.body}</p>
                </div>
            </div>
            `;
    });

    container.innerHTML += htmlEl.join("");
}

show();





