document.addEventListener('DOMContentLoaded', () => {
    const btnStream = document.getElementById('btnStream');
    
    if (btnStream) {
        btnStream.addEventListener('click', () => {
            const idCamara = "5152941846";
            // La URL protegida correctamente con comillas invertidas
            const urlNubeCamara = https://www.v380-cloud.com/play?id=${idCamara}; 
            window.open(urlNubeCamara, '_blank');
        });
    }
});