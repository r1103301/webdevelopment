let global = {
    searches: []
};
const setup = () =>{
    let saved = localStorage.getItem("searches");
    if (saved) {
        global.searches = JSON.parse(saved);
    }

    for(let i = 0; i < global.searches.length; i++) {
        let item = global.searches[i];
        if(item.title === "Google" || item.title === "Twitter" || item.title === "Instagram"){
            let searchVak = document.createElement("div");
            searchVak.classList.add("searchVakNormal");

            let title = document.createElement("div");
            title.classList.add("searchTitle");
            title.textContent = item.title;

            let text = document.createElement("div");
            text.classList.add("searchText");
            text.textContent = item.text;

            let url = document.createElement("a");
            url.classList.add("searchUrlNormal");
            url.textContent = "Go!";
            url.href = item.url;
            url.target = "_blank";

            searchVak.appendChild(title);
            searchVak.appendChild(text);
            searchVak.appendChild(url);

            const historyDiv = document.querySelector(".history");
            historyDiv.appendChild(searchVak);
        }
        else if(item.title === "Youtube"){
            let searchVak = document.createElement("div");
            searchVak.classList.add("searchVakOther");

            let title = document.createElement("div");
            title.classList.add("searchTitle");
            title.textContent = item.title;

            let text = document.createElement("div");
            text.classList.add("searchText");
            text.textContent = item.text;

            let url = document.createElement("a");
            url.classList.add("searchUrlOther");
            url.textContent = "Go!";
            url.href = item.url;
            url.target = "_blank";

            searchVak.appendChild(title);
            searchVak.appendChild(text);
            searchVak.appendChild(url);

            const historyDiv = document.querySelector(".history");
            historyDiv.appendChild(searchVak);
        }
    }
    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", search);
}
const search = () =>{
    let command = document.getElementById("command").value;
    if(command === "refresh"){
        location.reload()
    }
    else if(command.charAt(0) !== "/"){
        alert("invalid command");
    }
    else if(command.substring(0,3) !== "/g " &&
        command.substring(0,3) !== "/y " &&
        command.substring(0,3) !== "/x " &&
        command.substring(0,3) !== "/i "){
        alert("Unkown command prefix");
    }else if (command.substring(0,3) === "/g "){
        let search ={
            title: "Google",
            text: command.substring(3,command.length),
            url: `https://www.google.com/search?q=${command.substring(3,command.length)}`
        }
        global.searches.push(search);
        localStorage.setItem("searches", JSON.stringify(global.searches));
        window.open(search.url);

    }
    else if(command.substring(0,3) === "/y "){
        let search ={
            title: "Youtube",
            text: command.substring(3,command.length),
            url: `http://www.youtube.com/results?search_query=${command.substring(3,command.length)}`
        }
        global.searches.push(search);
        localStorage.setItem("searches", JSON.stringify(global.searches));
        window.open(search.url);
    }
    else if(command.substring(0,3) === "/x "){
        let search ={
            title: "Twitter",
            text: command.substring(3,command.length),
            url: `https://x.com/hashtag/${command.substring(3,command.length)}`
        }
        global.searches.push(search);
        localStorage.setItem("searches", JSON.stringify(global.searches));
        window.open(search.url);
    }
    else if(command.substring(0,3) === "/i "){
        let search ={
            title: "Instagram",
            text: command.substring(3,command.length),
            url: `http://www.instagram.com/explore/tags/${command.substring(3,command.length)}/`
        }
        global.searches.push(search);
        localStorage.setItem("searches", JSON.stringify(global.searches));
        window.open(search.url);
    }
}
window.addEventListener("load", setup);