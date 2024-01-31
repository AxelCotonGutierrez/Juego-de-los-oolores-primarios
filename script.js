// Axel Cotón Gutiérrez Copyright 2023


let currentColor = '';
let lastColor = '';

function randomColor() {
    const colors = ['blue', 'yellow', 'red'];
    let newColor;

    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === lastColor); // Repetir hasta obtener un color diferente al último

    lastColor = newColor; // Actualizar el último color
    return newColor;
}

function setColor() {
    currentColor = randomColor();
    const colorCircle = document.getElementById('color-circle');
    colorCircle.style.backgroundColor = currentColor;
}

function checkColor(color) {
    const result = document.getElementById('result');
    if ((color === 'Azul' && currentColor === 'blue') || 
        (color === 'Amarillo' && currentColor === 'yellow') ||
        (color === 'Rojo' && currentColor === 'red')) {
        result.innerHTML = '¡Correcto! Buen trabajo.';
        result.style.color = "green";
    } else {
        result.innerHTML = 'Incorrecto. Vuelve a intentarlo.';
        result.style.color = "red";
    }
}

function nextQuestion() {
    setColor();
    document.getElementById('result').innerHTML = '';
}

window.onload = setColor;

// Navegaciòn"  
 
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
        
    menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    });
  });