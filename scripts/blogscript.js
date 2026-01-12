const isLocal =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.hostname === "";

document.addEventListener("DOMContentLoaded", () =>{
    const perams = new URLSearchParams(window.location.search);
    const file = perams.get("file");

    if (!file) document.getElementById("body").textContent = "error: Text file was not found";

    if (isLocal){
        let prefix = "";
    }else{
        let prefix = "https://me.natesite.co.uk"
    }

    fetch(`${prefix}/blogs/${file}`)
        .then(r => r.text())
        .then(t => {
            document.getElementById("body").innerHTML = t;
        });
});