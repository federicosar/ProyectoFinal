//todas las posibilidades de cards de  listas.json

//let carrito = JSON.parse(localStorage.getItem('productosCarrito'))??[]
//console.log(carrito)
function mostarCards() {
    fetch("./listas.json")
        .then(response => response.json())
        .then(estilos => { 
            estilos.forEach((cardEstilo) =>{

                let {Estilo, Tipo, imagen, precio, id}= cardEstilo
                Grid.innerHTML += `
                <div class="card border-light mb-3" style="max-width: 20rem;">
                    <div class="card-header">${Estilo}</div>
                        <div class="card-body">
                            <h4 class="card-title">${Tipo}</h4>
                           
                            <p class="card-text">${precio}</p>
                            <p class="card-text">${id}</p>
                        </div>
                        <div class="card-body"> <img src="${imagen}" alt="imgReferencia"></div>
                </div>
        `
    })
        })
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