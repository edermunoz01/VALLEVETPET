document.addEventListener('DOMContentLoaded', () => {
    // 1. Control del Botón de la Cámara en Vivo
    const btnStream = document.getElementById('btnStream');
    
    if (btnStream) {
        btnStream.addEventListener('click', () => {
            const idCamara = "5152941846";
            // Corrección de URL protegida con comillas invertidas (backticks)
            const urlNubeCamara = https://www.v380-cloud.com/play?id=${idCamara};
            window.open(urlNubeCamara, '_blank');
        });
    }

    // 2. Control del Formulario (Captura de tu Número)
    const petForm = document.getElementById('petForm');
    if (petForm) {
        petForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue sola
            
            const inputPetName = document.getElementById('inputPetName').value;
            const inputPhone = document.getElementById('inputPhone').value || "3005359435";
            const inputService = document.getElementById('inputService').value;
            const inputSpecialty = document.getElementById('inputSpecialty').value;
            const inputDate = document.getElementById('inputDate').value;
            const inputTime = document.getElementById('inputTime').value;

            // Aquí quedan listos tus datos consolidados
            console.log("Datos de la Cita Registrados:", {
                mascota: inputPetName,
                telefono: inputPhone,
                servicio: inputService,
                especialidad: inputSpecialty,
                fecha: inputDate,
                hora: inputTime
            });

            alert(Servicio agendado con éxito para tu mascota. Contacto registrado: ${inputPhone});
        });
    }
});
