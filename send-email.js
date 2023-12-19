document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    
    // Obtiene los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Crear un objeto con los datos a enviar al servidor
    const data = {
        name: name,
        email: email,
        message: message
    };
    
    // Realizar la petición POST al servidor
    fetch('/send-email', { // Reemplaza '/send-email' con la ruta del servidor que manejará el envío del correo
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ocurrió un error al enviar el correo.');
        }
        alert('Correo enviado correctamente.'); // Muestra un mensaje al usuario
        document.getElementById("contactForm").reset(); // Reinicia el formulario después de enviar el correo
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo.');
    });
});
