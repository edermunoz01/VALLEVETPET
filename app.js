document.addEventListener('DOMContentLoaded', () => {
    const petForm = document.getElementById('petForm');
    
    if (petForm) {
        petForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue

            // 1. Captura de los datos del formulario
            const inputPetName = document.getElementById('inputPetName').value;
            const inputPhone = document.getElementById('inputPhone').value || "3005359435";
            const inputService = document.getElementById('inputService').value;
            const inputSpecialty = document.getElementById('inputSpecialty').value;
            const inputDate = document.getElementById('inputDate').value;
            const inputTime = document.getElementById('inputTime').value;

            // 2. Creamos el texto ordenado para tu WhatsApp
            const mensajeWhatsApp = ¡Hola! Quiero agendar un servicio:%0A +
                                    🐾 *Mascota:* ${inputPetName}%0A +
                                    📞 *Contacto:* ${inputPhone}%0A +
                                    💼 *Servicio:* ${inputService}%0A +
                                    🩺 *Especialidad:* ${inputSpecialty}%0A +
                                    📅 *Fecha:* ${inputDate}%0A +
                                    ⏰ *Hora:* ${inputTime};

            // 3. Dirección de redirección directa a tu número con el código de país (57)
            const urlWhatsApp = https://api.whatsapp.com/send?phone=573005359435&text=${mensajeWhatsApp};
            
            // CORRECCIÓN REDIRECCIÓN: Usa la ventana actual para saltar el bloqueo del navegador móvil
            window.location.href = urlWhatsApp;
        });
    }
});
