var ourSlider = document.getElementById("textSizeSlider");
var text = document.getElementById("ranking");

ourSlider.oninput = function () {
    text.style.fontSize = this.value + "px";
}