var images = document.querySelectorAll('.ad-image');
var currentIndex = 0;
var interval;

// Función para mostrar la imagen actual
function showCurrentImage() {
    for (var i = 0; i < images.length; i++) {
        if (i === currentIndex) {
            images[i].classList.add('active');
        } else {
            images[i].classList.remove('active');
        }
    }
}

// Función para mostrar la imagen siguiente
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showCurrentImage();
}

// Función para mostrar la imagen anterior
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showCurrentImage();
}

// Mostrar la primera imagen al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    showNextImage();
    interval = setInterval(showNextImage, 10000); // Iniciar el bucle
});

//Obtener referencias a los botones 
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

//Agregar manejadores de eventos para los botones
prevButton.addEventListener('click', function() {
    clearInterval(interval); //Detener el bucle automático 
    showPreviousImage();
    interval = setInterval(showNextImage, 10000); //Reinicia el buble
});

nextButton.addEventListener('click', function() {
    clearInterval(interval); //Detener el bucle automático
    showNextImage();
    interval = setInterval(showNextImage, 10000); //Reinicia el buble
});