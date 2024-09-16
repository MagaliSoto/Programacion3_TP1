document.getElementById('contacto-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    const formulario = document.getElementById('contacto-formulario');
    const overlay = document.getElementById('overlay');
    
    if (formulario.style.display === 'none' || formulario.style.display === '') {
        formulario.style.display = 'block';
        overlay.style.display = 'block';
    } else {
        formulario.style.display = 'none';
        overlay.style.display = 'none';
    }
});

document.getElementById('btnCancelar').addEventListener('click', function() {
    document.getElementById('contacto-formulario').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('txtNombre').value = '';
    document.getElementById('txtEmail').value = '';
    document.getElementById('txtMensaje').value = '';
});
