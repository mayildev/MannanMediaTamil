// ===== DARK MODE =====

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// ===== LOAD SAVED THEME =====

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
}

// ===== SEARCH =====

const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let cards = document.querySelectorAll(".news-card");

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// ===== SMOOTH SCROLL =====

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        ?.scrollIntoView({
            behavior:"smooth"
        });

    });

});

console.log("Mannan Media Loaded Successfully");
function toggleMenu(){

document.getElementById("mobileMenu").classList.toggle("show");

}
