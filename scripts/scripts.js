AOS.init();


// ----------------------- SCROLL -----------------------

// Selecciona todos los enlaces con la clase "header__link"
document.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace

        // Obtén el ID del elemento objetivo
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calcula la posición del elemento y la altura del viewport
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offset = (window.innerHeight - targetElement.offsetHeight) / 2;

            // Realiza el scroll animado
            window.scrollTo({
                top: targetPosition - offset,
                behavior: 'smooth'
            });
        }
    });
});

// -----------------music------------------------------------


document.addEventListener("DOMContentLoaded", function() {
    const audio = document.querySelector(".audio");
    const playButton = document.querySelector(".icon__play");
    const pauseButton = document.querySelector(".icon__pause");
    const backwardButton = document.querySelector(".icon__backward");
    const forwardButton = document.querySelector(".icon__forward");
    const progressBar = document.querySelector(".progress__bar");
    const progressFilled = document.querySelector(".progress__filled");

    // Función para reproducir el audio
    function playAudio() {
        audio.play();
        playButton.style.display = "none";
        pauseButton.style.display = "inline-block";
    }

    // Función para pausar el audio
    function pauseAudio() {
        audio.pause();
        playButton.style.display = "inline-block";
        pauseButton.style.display = "none";
    }

    // Función para retroceder 10 segundos
    function rewindAudio() {
        audio.currentTime -= 10;
    }

    // Función para avanzar 10 segundos
    function forwardAudio() {
        audio.currentTime += 10;
    }

    // Actualizar la barra de progreso
    function updateProgressBar() {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressFilled.style.width = `${percentage}%`;
    }

    // Evento de clic en el botón de play
    playButton.addEventListener("click", playAudio);

    // Evento de clic en el botón de pausa
    pauseButton.addEventListener("click", pauseAudio);

    // Evento de clic en el botón de retroceder
    backwardButton.addEventListener("click", rewindAudio);

    // Evento de clic en el botón de avanzar
    forwardButton.addEventListener("click", forwardAudio);

    // Evento para actualizar la barra de progreso durante la reproducción
    audio.addEventListener("timeupdate", updateProgressBar);

    // Permitir arrastrar la barra de progreso
    progressBar.addEventListener("click", function(e) {
        const clickX = e.offsetX;
        const barWidth = progressBar.offsetWidth;
        const newTime = (clickX / barWidth) * audio.duration;
        audio.currentTime = newTime;
    });
});


// ---------------------- temporizador -------------------------
function updateTimer() {
    const targetDate = new Date("january 11, 2025 13:30:00").getTime();
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;
  
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);




  //   -------------- fancybox --------------------------------- 



Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
        display: [
            { id: "zoom", position: "left" },
            { id: "slideshow", position: "left" },
            { id: "fullscreen", position: "left" },
            { id: "download", position: "left" },
            { id: "thumbs", position: "left" },
            { id: "close", position: "right" }
        ]
    },
    Thumbs: {
        autoStart: true, // Iniciar la visualización en miniatura automáticamente
        axis: 'x' // Opción para cambiar el eje de la cuadrícula a 'y' si prefieres
    },
    Infinite: true, // Habilitar bucle infinito
    SlideShow: {
        autoStart: false, // Cambia a true para iniciar automáticamente
        speed: 3000 // Velocidad del slideshow en milisegundos
    },
    Download: {
        text: 'Download', // Texto para la opción de descarga
        // Puedes personalizar la función de descarga aquí
    },
    Thumbs: {
        autoStart: true // Muestra las miniaturas automáticamente
    },
    Buttons: [
        "zoom",
        "share",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close"
    ]
});




  // --------------------------------gift---------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('mostrarBoton');
    const textoDesplegable = document.getElementById('textoDesplegable');
  
    boton.addEventListener('click', function () {
      textoDesplegable.classList.toggle('mostrar');
    });
  });
  
  
  function copyText() {
    var aliasText = document.getElementById('alias').innerText; // Obtener el texto del alias
    var tempInput = document.createElement('input');
    tempInput.value = aliasText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  
    // Mostrar el mensaje de "¡Copiado!"
    var copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(function() {
        copyMessage.style.display = 'none';
    }, 1500); // Ocultar el mensaje después de 1.5 segundos
  }
  
  
  
  function copyCbuText() {
    const aliasText = document.getElementById('cbuAlias').textContent;
    const copyMessage = document.getElementById('copyCbuMessage');
  
    const textarea = document.createElement('textarea');
    textarea.value = aliasText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  
    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2000);
  }




    // --------------------------- dresscode-------------------------


const showImageBtn = document.getElementById("showImage");
const lightbox = document.getElementById("lightbox");
const closeButton = document.getElementById("closeButton");

showImageBtn.addEventListener("click", function() {
  lightbox.style.display = "flex";
});

closeButton.addEventListener("click", function() {
  lightbox.style.display = "none";
});

const boton = document.getElementById('mostrarBoton');
const textoDesplegable = document.getElementById('textoDesplegable');

boton.addEventListener('click', () => {
  textoDesplegable.classList.toggle('oculto');
});


// --------------------------- playlist --------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Definir los números de teléfono
    const phoneNumber1 = '543815717071'; // Número para el primer botón
    const phoneNumber2 = '543816591298'; // Número para el segundo botón
  
    // Función para enviar mensaje por WhatsApp
    function sendMessage(phoneNumber) {
        const name = document.getElementById('userName').value;
        const message = document.getElementById('whatsappMessage').value;
  
        if (name.trim() === '' || message.trim() === '') {
            alert('Por favor, completa ambos campos antes de enviar.');
            return;
        }
  
        const fullMessage = `*Nombre y Apellido:* ${name}\n\n*Tema recomendado:* ${message}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
  
        // Abre la URL de WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');
  
        // Mostrar mensaje de confirmación
        alert('Mensaje enviado');
  
        // Limpiar los campos de entrada
        document.getElementById('userName').value = '';
        document.getElementById('whatsappMessage').value = '';
  
        // Volver al bloque de formulario
        document.querySelector('.playlist').scrollIntoView({ behavior: 'smooth' });
    }
  
    // Asignar eventos a los botones
    document.getElementById('botonplay1').addEventListener('click', function() {
        sendMessage(phoneNumber1);
    });
  
    document.getElementById('botonplay2').addEventListener('click', function() {
        sendMessage(phoneNumber2);
    });
  });
  
  


  // --------------- confirmacion --------------------------------------


document.addEventListener('DOMContentLoaded', function() {
    // Definir los números de teléfono
    const recipientNumber1 = '543815717071'; // Número para el primer botón
    const recipientNumber2 = '543816591298'; // Número para el segundo botón
  
    // Función para enviar mensaje por WhatsApp
    function sendMessage(phoneNumber) {
        const userName = document.getElementById('userFullName').value.trim();
        const userMessage = document.getElementById('customMessage').value.trim();
        const attendanceStatus = document.querySelector('input[name="attendanceOption"]:checked');
  
        if (!attendanceStatus) {
            alert('Por favor, selecciona si asistirás o no.');
            return;
        }
  
        if (userName === '') {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }
  
        const alimenticioSeleccionado = document.querySelector('input[name="alimenticioOption"]:checked');
        let restriccionAlimenticia = 'N/A';
        if (alimenticioSeleccionado) {
            const selectedId = alimenticioSeleccionado.id;
            switch (selectedId) {
                case 'celiaca':
                    restriccionAlimenticia = 'Celíac@';
                    break;
                case 'vegetariana':
                    restriccionAlimenticia = 'Vegetarian@';
                    break;
                case 'hipertesion':
                    restriccionAlimenticia = 'Hipertensión';
                    break;
                case 'diabetica':
                    restriccionAlimenticia = 'Diabétic@';
                    break;
                case 'ninguna':
                    restriccionAlimenticia = 'Ninguna';
                    break;
            }
        }
  
        const finalMessage = `*Presencia:* ${attendanceStatus.value}\n*Nombre y Apellido:* ${userName}\n*Restricción alimenticia:* ${restriccionAlimenticia}\n*Mensaje:* ${userMessage ? userMessage : 'N/A'}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
  
        // Abre la URL de WhatsApp en una nueva pestaña
        window.open(whatsappLink, '_blank');
  
        // Mostrar mensaje de confirmación
        alert('Mensaje enviado');
  
        // Limpiar los campos de entrada
        document.getElementById('userFullName').value = '';
        document.getElementById('customMessage').value = '';
        document.querySelectorAll('input[name="attendanceOption"]').forEach(radio => radio.checked = false);
        document.querySelectorAll('input[name="alimenticioOption"]').forEach(radio => radio.checked = false);
  
        // Redirigir a la sección con id 'correo'
        window.location.hash = 'correo';
    }
  
    // Asignar eventos a los botones
    document.getElementById('btnConfirmacion1').addEventListener('click', function() {
        sendMessage(recipientNumber1);
    });
  
    document.getElementById('btnConfirmacion2').addEventListener('click', function() {
        sendMessage(recipientNumber2);
    });
  });
  