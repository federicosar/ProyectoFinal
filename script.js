//todas las posibilidades de cards de  listas.json

let carrito = JSON.parse(localStorage.getItem('productosCarrito'))??[]
console.log(carrito)
function mostarCards (){
    fetch("./listas.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((element) => {

        Grid.innerHTML += `
            <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                    <div class="card-header">Estilo ${element.Estilo}</div>
                        <div class="card-body">
                                <h4 class="card-title">Precio ${element.Tipo}</h4>
                                <h4 class="card-title">Precio ${element.tamañoaAncho}</h4>
                                <h4 class="card-title">Precio ${element.tamañoLargo}</h4>
                                <h4 class="card-title">Precio ${element.id}</h4>
                                <h4 class="card-title">Precio ${element.precio}</h4>
                            <img style="width:200px;" src="${element.imagen}">
                            <button id="BotonEnviar${element.id}">Agregar</button>
                        </div>
            </div>    `})

        data.forEach(element => {
            let idNombre = document.getElementById(`BotonEnviar${element.id}`).addEventListener('click', () => {
                //let elements = data.find(element => element.id == element.id)
                if(carrito.some(element => element.id == "1")){
                    let indice = carrito.findIndex(element => element.id == idNombre)
                    carrito[indice].cant++

                    } else {
                        let seleccionDetatuaje = {
                            ...data,
                            cant: 1
                                                    } 
                                                    carrito.push(seleccionDetatuaje)
                                                    }
                
                
                
                localStorage.setItem("productosCarrito", JSON.stringify(carrito))
                                                        
                
            })
            
        })



        //     function botonCarrito (){
        //         let botonCarrito = document.querySelectorAll("#BotonEnviar");
        //     botonCarrito.forEach(e => e.addEventListener("click", () => 


        //     console.log('click')


        //     ))


        //     }
        //     botonCarrito ();


    });
}
mostarCards()

//Fin de todas las posibilidades de cards de  listas.json

const Grid = document.querySelector("#GridDeCards")
const Radio = document.querySelector("#seleccionDeTamaños")
const Submit = document.querySelector("#enviarRadio")




//funcion que elije estilo de tatuaje del listas.json
function elegirEstiloRadio() {
    enviarRadio.addEventListener('click', (e) => {
        e.preventDefault()

        let seleccionado = document.querySelector('input[type="radio"]:checked');
        console.log(seleccionado.value)

        // if (document.getElementById('optionTradicional').checked) 
        //     console.log("trad")
        // if (document.getElementById('optionTribal').checked) 
        //     console.log("trib")
        // if (document.getElementById('optionRealismo').checked) 
        //     console.log("real")
        // if (document.getElementById('optionNeotraditional').checked) 
        //     console.log("Ntrad")
        if (seleccionado.value) {



        }

    })
}

elegirEstiloRadio();

//fin de funcion que elije estilo de tatuaje del listas.json