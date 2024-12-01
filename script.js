console.log("ready")
const img = document.querySelector('img');
const title_img = document.getElementById('title_img');
const link = document.getElementById("sound");
const audio = document.getElementById("main_audio");


link.addEventListener("click", function(event) {
    event.preventDefault();
    audio.play();


});


img.addEventListener('mousemove', () => {
    console.log("Movemouse activated")
    title_img.textContent = "AHAHA c'est marrant ça tourne hein connard, aller va te faire enculer ok ?";
});


img.addEventListener('click', () => {
    console.log("ready")
    title_img.style.color = "red"

});








