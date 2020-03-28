
document.querySelector('#imagenes').addEventListener('submit', cargarImagenes);

// Llamado a Ajax e imprimir resultados
function cargarImagenes(e) {
     e.preventDefault();

     // Leer las variables

     const NumberSelect = document.getElementById('numero').value;

    

     let url = '';
     url += 'https://picsum.photos/v2/list?';
     //Si se ingreso cantidad hacer algo
     
     if(NumberSelect !== '') {
          url += `page=${0}&`;
          url += `limit=${NumberSelect}`;
     }
     console.log(url);
     
     ///Conectar
     const xhr = new XMLHttpRequest();
     ///Abrir
     xhr.open('GET',url,true);
     ///Imprimir 
     xhr.onload = function ()
     {
        if(this.status === 200)
        {
            const imagenes = JSON.parse(this.responseText) ;  
            console.log(imagenes);
            let htmlimg = '';             
            imagenes.forEach(function(imagen) {
                htmlimg += `<img src="${imagen.download_url}">`;
            });
           document.getElementById('resultado').innerHTML = htmlimg;
        }
     }
     xhr.send();
}