const enviar = document.querySelector('.enviar-comentario');



function guardar() {

    db.collection("usuarios").add({
        nombre: document.getElementById('nombre_usuario').value,
        comentario: document.getElementById('comentario_usuario').value,

    })
        .then((docRef) => {
            alert('Comentario registrado');
        })
        .catch((error) => {
            alert('Error al enviar comentario')
        });
}