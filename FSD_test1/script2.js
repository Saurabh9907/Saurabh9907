const generateBtn = document.getElementById("generate");
const clearBtn = document.getElementById("clear");

generateBtn.addEventListener("click", () => {
    generateJoke();
});

async function generateJoke() {
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();
        document.getElementById("fill-joke").innerText = data.delivery;
        const data_len = JSON.stringify(data.delivery);
        const len = data_len.length;
        document.getElementById("count-joke-length").innerText = `${len}`;
    } catch {
        // alert("Some Error occured");
        console.log("Some Error occured");
    }
}

clearBtn.addEventListener("click", () => {
    document.getElementById("fill-joke").innerText = "";
    document.getElementById("count-joke-length").innerText = "";
});
