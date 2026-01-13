console.log("The script has loaded for this page.");


const isLocal =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1";

let prefix = "";

document.addEventListener("DOMContentLoaded", () =>{
    const perams = new URLSearchParams(window.location.search);
    const file = perams.get("file");

    if (!file) document.getElementById("body").textContent = "error: Text file was not found";

    if (!isLocal){
        prefix = "https://me.natesite.co.uk";
        console.log("The page is on buid");
    }else{
        console.log("not on build")
    }

    fetch(`${prefix}/blogs/${file}`)
        .then(r => r.text())
        .then(t => {
            document.getElementById("body").innerHTML = t;
        });
});