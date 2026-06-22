// Resaltar productos al pasar el mouse
let productos = document.querySelectorAll(".producto");

productos.forEach(function (producto) {

    producto.addEventListener("mouseover", function () {
        producto.style.transform = "scale(1.05)";
    });

    producto.addEventListener("mouseout", function () {
        producto.style.transform = "scale(1)";
    });

});

// Mostrar mensaje al hacer clic en un producto
productos.forEach(function (producto) {

    producto.addEventListener("click", function () {
        alert("Producto seleccionado.");
    });

});

// Validar formulario de contacto
function validarFormulario() {

    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("correo");
    let mensaje = document.getElementById("mensaje");

    if (nombre.value === "" || correo.value === "" || mensaje.value === "") {

        alert("Complete todos los campos.");
        return false;

    }

    alert("Formulario enviado correctamente.");
    return true;

}