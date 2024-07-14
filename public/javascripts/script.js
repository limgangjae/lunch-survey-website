let submitted = false;

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById("form");
    const submitButton = document.getElementById("submit-button");

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const foodName = document.getElementById("input-field").value;

        if (!submitted) {

            fetch("/update", {
                method: "POST",
                body: {"name": foodName}
            }).then((res) => console.log(res));

            submitted = !submitted;

            submitButton.className = "cancel-button";

        } else {

            fetch("/update", {
                method: "POST",
                body: {"name": foodName}
            }).then((res) => console.log(res));

            submitted = !submitted;

            submitButton.className = "submit-button";

        }
        
    })

});
