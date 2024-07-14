let submitted = false;

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById("form");
    const submitButton = document.getElementById("submit-button");

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const foodName = document.getElementById("input-field").value;

        if (!submitted) {

            fetch("https://tall-simple-leopon.glitch.me/app.js", {
                method: "POST",
                headers: {"Content-Type": "/update"},
                body: {"name": foodName}
            }).then((res) => console.log(res));

            submitted = !submitted;

            submitButton.className = "cancel-button";

        } else {

            fetch("https://tall-simple-leopon.glitch.me/app.js", {
                method: "POST",
                headers: {"Content-Type": "/delete"},
                body: {"name": foodName}
            }).then((res) => console.log(res));

            submitted = !submitted;

            submitButton.className = "submit-button";

        }
        
    })

});
