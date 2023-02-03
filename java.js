const productos = [
    
    { nombre: "Cerveza", marca: "Andres", precio: 500},
    { nombre: "Fernet", Marca: "Branca", precio: 1500},
    { nombre: "Vino", marca: "Mosquita muerta", precio: 2000},
    { nombre: "Gin", marca: "La Fuerza", precio: 2500},
    { nombre: "Whisky", marca: "Johmie Walker", precio: 4000},
]

const inventario = []

let seleccion = prompt ("¿Desea realizar una compra? (escriba si o no)")

while (seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si queres realizar una compra")
    seleccion =  prompt ("¿Desea realizar una compra? (escriba si o no)")
}

if(seleccion == "si"){
    alert("A continuacion te mostramos nuestros productos disponibles")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
    alert(todoslosProductos.join(" - "))
}   

else if(seleccion == "no")
alert("Gracias por tu visita")

while(seleccion !="no"){
    let producto = prompt("Agrega el producto que desees a tu carrito")
    let precio = 0

    if(producto == "Cerveza" || producto == "Fernet" || producto == "Vino" ||
     producto == "Gin" || producto == "Whisky")
     switch(producto){
        case "Cerveza":
            precio = 500;
            break;
        case "Fernet":
            precio = 1500;
            break;
        case "Vino":
            precio = 2000;
            break;
        case "Gin":
            precio = 2500;
            break;
        case "Whisky":
            precio = 4000;
            break;
        default:
            break;
    }

    else {
        alert("Ese producto no esta disponible")
    }

    let unidades = parseInt(prompt("¿Cuantas unidades deseas?"))
    inventario.push({producto, unidades, precio})
    console.log(inventario)

    seleccion = prompt("¿Queres seguir comprando?")

    while(seleccion === "no"){
        alert("Gracias por tu compra")
            inventario.forEach ((inventarioFinal) => {
            console.log('Producto: ${inventarioFinal}, Unidades: ${inventario.unidades}, Total a pagar por producto ${inventarioFinal.unidades * inventarioFinal.precio}')
            }
        )
        break
    }
}

    const total = inventario.reduce((acc, el) => acc + el.precio * el.unidades, 0)
    console.log('Tu total a pagar es: ${}')