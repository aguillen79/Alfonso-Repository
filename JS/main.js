/* const nombre = document.querySelector('#name')

nombre.addEventListener('input', validarNombre)



function validarNombre (){

    let nv = nambre.value
    let sliceName = nv.split('@');

} */


const users = [
    {
        id: 1,
        nombre: 'Ronnie',
        apellido: 'Santoyo'
    },
    {
        id: 2,
        nombre: 'Augusto',
        apellido: 'Santoyo'
    },
    {
        id: 3,
        nombre: 'William',
        apellido: 'Santoyo'
    },
    {
        id: 4,
        nombre: 'Oliver',
        apellido: 'Santoyo'
    },
    {
        id: 5,
        nombre: 'Harold',
        apellido: 'Santoyo'
    },

]

/*     for (let i = 0; i < users.length; i++) {
        console.log(users[i]['nombre']) 
        console.log(users[i]['apellido'])
    } */

const user_list = document.querySelector('#user_list');

const caja = document.querySelector

for (let i = 0; i < users.length; i++) {
    if (users[i].id !== 4) {
        caja.innerHTML += "<li>" + users[i].nombre + "</li>"
    }
}    
