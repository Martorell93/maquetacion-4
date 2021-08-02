//Variables a utilizar
let contenedorProductos = 0;
let contenedorPrecio = 0;
let repetidos = 1;
let productos = [];



//Función añadir a carrito
function añadirCarritoPlatano() {
    let nombre = $("#platano > .card-body > .card-title").text();
    productos.push(nombre);
    let precio = parseFloat($("#precioPlatano").text());
    contenedorPrecio += precio;
    contenedorProductos++;
}

function añadirCarritoAguacate() {
    let nombre = $("#aguacate> .card-body > .card-title").text();
    productos.push(nombre);
    let precio = parseFloat($("#precioAguacate").text());
    contenedorPrecio += precio;
    contenedorProductos++;
}

function añadirCarritoKiwis() {
    let nombre = $("#kiwis > .card-body > .card-title").text();
    productos.push(nombre);
    let precio = parseFloat($("#precioKiwis").text());
    contenedorPrecio += precio;
    contenedorProductos++;
}

function añadirCarritoMango() {
    let nombre = $("#mango > .card-body > .card-title").text();
    productos.push(nombre);
    let precio = parseFloat($("#precioMango").text());
    contenedorPrecio += precio;
    contenedorProductos++;
}

function añadirCarritoManzanas() {
    let nombre = $("#manzanas > .card-body > .card-title").text();
    productos.push(nombre);
    let precio = parseFloat($("#precioManzanas").text());
    contenedorPrecio += precio;
    contenedorProductos++;
}

function añadirCarritoMelon() {
    let nombre = $("#melon> .card-body > .card-title").text();
    productos.push(nombre);
    let precio = parseFloat($("#precioMelon").text());
    contenedorPrecio += precio;
    contenedorProductos++;
}

function añadirCarritoNectarinas() {
    let nombre = $("#nectarinas > .card-body > .card-title").text();
    productos.push(nombre);
    let precio = parseFloat($("#precioNectarinas").text());
    contenedorPrecio += precio;
    contenedorProductos++;
}

function añadirCarritoPeras() {
    let nombre = $("#peras> .card-body > .card-title").text();
    productos.push(nombre);
    let precio = parseFloat($("#precioPeras").text());
    contenedorPrecio += precio;
    contenedorProductos++;
}

function añadirCarritoPiña() {
    let nombre = $("#piña> .card-body > .card-title").text();
    productos.push(nombre);
    let precio = parseFloat($("#precioPiña").text());
    contenedorPrecio += precio;
    contenedorProductos++;
}

//Funciones mostrar productos en el carrito
function showProductos() {
    if (productos.length != 0) {
        for (let i = 0; i < productos.length; i++) {
            for (let j = i+1; j < productos.length; j++) {
                if (productos[i] === productos[j]) {
                    repetidos++;
                }
                else {
                    repetidos = 1;
                }
            }
            $("#listaProductos").append("<p class='infoCosas'> - " + productos[i] + " : " + repetidos + " <button type='button' onclick='vaciarElemento()'>Quitar</button></p>");
        }
        $("#numeroProductos").append("<span id='infoPro'> "+ contenedorProductos + "</span>");
        $("#precioTotal").append("<span id='infoPre'>" + contenedorPrecio + "€</span>");
    }

    else if (productos.length === 0) {
        $("#listaProductos").append("<p id='vacio'>Carrito vacio</p>");
    }
}

//Función quitar elemento
function vaciarElemento() {

}

//Función borrar info
function borrarInfo() {
    $("#vacio").remove();
    $(".infoCosas").remove();
    $("#infoPro").remove();
    $("#infoPre").remove();

}

//Función vaciar carrito
function vaciarCarrito() {
    productos = [];
    contenedorPrecio = 0;
    contenedorProductos = 0;
}