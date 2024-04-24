function cargarJSON(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
        })
}

const urlJSON1 = 'padreInformacion.json';
const urlJSON2 = 'hijoInformacion.json';

// Cargar los archivos JSON
Promise.all([cargarJSON(urlJSON1),cargarJSON(urlJSON2)])
    .then(data => {
        const data1 = data[0];
        const data2 = data[1];

        //Imagen para la cabecera
        imagenPadre = document.querySelector(".padre")
        imagen = document.createElement('img')
        
        imagen.src = data1.padres[0].img
        imagen.classList.add('img-padre')
        imagen.alt = data1.padres[0].altImg
        imagenPadre.appendChild(imagen)

        strongElement = document.createElement('strong')
        strongText = document.createTextNode(data1.padres[0].name + " " + data1.padres[0].surname)
        strongElement.style.fontSize = "18px"
        strongElement.style.paddingLeft = "20px"
        strongElement.appendChild(strongText)
        imagenPadre.appendChild(strongElement)

        perfilPadre = document.querySelector(".perfil")
        divTexto = document.createElement('div')        
        Texto = document.createTextNode("Nombre y apellido: " + data1.padres[0].name + " " + data1.padres[0].surname)
        divTexto.classList.add('formatoPerfil')
        divTexto.appendChild(Texto)
        perfilPadre.appendChild(divTexto)

        divTexto = document.createElement('div')   
        Texto = document.createTextNode("D.N.I.: " + data1.padres[0].dni)
        divTexto.classList.add('formatoPerfil')
        divTexto.appendChild(Texto)
        perfilPadre.appendChild(divTexto)

        divTexto = document.createElement('div')   
        Texto = document.createTextNode("E-mail: " + data1.padres[0].email)
        divTexto.classList.add('formatoPerfil')
        divTexto.appendChild(Texto)
        perfilPadre.appendChild(divTexto)  
        
        divTexto = document.createElement('div')     
        Texto = document.createTextNode("Hijo: " + data2.hijos.name + " " + data2.hijos.surname)
        divTexto.classList.add('formatoPerfil')
        divTexto.appendChild(Texto)
        perfilPadre.appendChild(divTexto)
        

});