// NAVBAR TOGGLE
document.querySelector(".hamburger").onclick = () => {
    if (document.querySelector("#check").checked) {
        document.querySelector(".mob-navbar").classList.toggle("active")
        document.body.classList.toggle("active")
    }
}