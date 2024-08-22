document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".content-loader");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const url = this.getAttribute("href");

            fetch(url)
                .then(response => response.text())
                .then(data => {
                    document.getElementById("main-content").innerHTML = data;
                })
                .catch(error => {
                    console.error("Error loading content: ", error);
                });
        })
    })
});