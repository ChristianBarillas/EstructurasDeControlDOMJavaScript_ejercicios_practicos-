
var tabla = document.getElementById('tabla1');



    db.collection("usuarios").onSnapshot((querySnapshot) => {
        tabla.innerHTML = '';
        querySnapshot.forEach((doc) => {

            tabla.innerHTML +=
            
            `
            <tr>
        
            <td>${doc.data().nombre}</td>
            <td>${doc.data().comentario}</td>
          
          </tr>
            `

          

          
       



        });
    });

