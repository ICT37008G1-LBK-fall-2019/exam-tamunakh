let list = document.createElement("ul");
document.body.appendChild(list);

fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => response.json())
.then(
    json => json.map(album => {
        let li = document.createElement("li");
        li.innerHTML = album.title;
        list.appendChild(li);
    })
)

