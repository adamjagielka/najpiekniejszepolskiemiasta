var dark = true;

document.getElementById('switch').onclick = function () {

    if (dark == false) {
        document.getElementById('theme').href = "light.css";
        dark = true;
        document.getElementById('switch').innerHTML = "Ciemny";
    }
    else {
        document.getElementById('theme').href = "dark.css";
        dark = false;
        document.getElementById('switch').innerHTML = "Jasny";
    }
    console.log(document.getElementById('switch').value);
};