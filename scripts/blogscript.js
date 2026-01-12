document.addEventListener("DOMContentLoaded", () =>{
    const perams = new URLSearchParams(window.location.search);
    const file = perams.get("file");

    if (!file) document.getElementById("body").textContent = "error: Text file was not found";

    fetch(`blogs/${file}`, {cache: "no-store"})
        .then(r => r.text())
        .then(t => {
            document.getElementById("body").innerHTML = t;
        });
});