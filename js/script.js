const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.quaryselector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDeFault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.traget.parentElement.parentElement;
        leerDatosElemento(elemento)
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.quarySelector('img').src,
        titulo: elemento.quarySelector('h3').textContent,
        precio: elemento.queryselector('.precio').textContent,
        id: elemento.quarySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
             <img src="${elemento.imagen}" width=100 >
        </td>
        <td>
             ${elemento.titulo}
        </td>
        <td>
             ${elemento.precio}
        </td>
        <td>
          <a herf="#" class="borrar" data-id="${elemento.id}" > x </a>
        </td>
    `;
    lista.appendChild(row);
}  

function eliminarElemento(e) {
    e.preventDeFault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.tarjet.parentElement.parentElement;
        elementoId = elemento.quarySelector('a').getAttribute('data-id');
    } 
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}