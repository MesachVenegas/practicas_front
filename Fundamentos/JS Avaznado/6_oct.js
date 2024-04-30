const person = {
    name: "Brenda Gonzalez",
    age: 27,
    email: "brenda@academlo.com",
    image: "https://picsum.photos/200/300"
}

const person2 = {
    name: "Yuliana del Carmen",
    age: 25,
    email: "yuliana@academlo.com",
    image: "https://picsum.photos/200/300"
}


function createUser(user) {
    const contenedor = document.createElement("article")
    const name = document.createElement("h3")
    name.innerText = `${user.name}`
    const edad = document.createElement("h4")
    edad.innerText = `EDAD: ${user.age} años`
    const email = document.createElement("h4")
    email.innerText = `${user.email}`
    const img = document.createElement("img")
    img.src = `${user.image}`
    img.classList.add("img-circle")

    contenedor.appendChild(name)
    contenedor.appendChild(edad)
    contenedor.appendChild(email)
    contenedor.appendChild(img)

    document.body.appendChild(contenedor)
}

// createUser(person)
// createUser(person2)

//  Listar todos los usuarios del arreglo y mostrarlos en el navegador.
const users = [
    {
        name: "Fulanita Perez",
        email: "fulanita@gmail.com",
        age: 30,
        image: "https://picsum.photos/id/1011/200/300"
    },
    {
        name: "Matias Sanchez",
        email: "matias@gmail.com",
        age: 30,
        image: "https://picsum.photos/id/1005/200/300"
    },
    {
        name: "Susana Distancia",
        email: "susy@gmail.com",
        age: 30,
        image: "https://picsum.photos/id/1027/200/300"
    },
    {
        name: "Maria Antonieta Doe",
        email: "maria@gmail.com",
        age: 30,
        image: "https://picsum.photos/id/342/200/300"
    }
]

users.forEach( user => createUser(user));