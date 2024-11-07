let submitBtn = document.getElementById("submit-btn");
let resetBtn = document.getElementById("reset-btn");

// to bind functions to buttons
submitBtn.addEventListener("click", () => {
    let username_data = document.getElementById("username-field").value;
    let password_data = document.getElementById("password-field").value;

    if (username_data === "AIMLC" && password_data === "AIMLC") {
        window.location.href = "generator.html";
    } else {
        alert("Invalid Username or Password");
    }
});

resetBtn.addEventListener("click", () => {
    document.getElementById("username-field").value = "";
    document.getElementById("password-field").value = "";
});
