
document.querySelector('#imagenes').addEventListener('submit', cargarImagenes);

// Llamado a Ajax e imprimir resultados
function cargarImagenes(e) {
     e.preventDefault();

     // Leer las variables

     const NumberSelectI = document.getElementById('numeroI').value;
     const NumberSelectP = document.getElementById('numeroP').value;
    

     let url = '';
     url += 'https://picsum.photos/v2/list?';
     //Si se ingreso cantidad hacer algo
     const newLimit = 100/NumberSelectI;
     numeroP.max=newLimit;
     numeroP.value="1";

     if(NumberSelectI !== '' && NumberSelectP !=='') {
          
          url += `page=${NumberSelectP}&`;
          url += `limit=${NumberSelectI}`;
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