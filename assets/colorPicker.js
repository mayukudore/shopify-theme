function changeColor() {
 let color = document.getElementById('color_background').value;
 document.querySelector('.bg-color').style.backgroundColor = color;
 document.getElementById('colorInput').value = color;
}