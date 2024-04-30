const usuario = {
    nombre : "Brenda",
    edad : 27,
    vacunacionCompleta: true,
    pasatiempos: [ "Leer", "Piano" ],
    mascota : [{
        nombre: "Canela",
        especie: "Gato"
    },
    {
        nombre: "Juno",
        especie: "Gato"
    },
    {
        nombre: "Aurora",
        especie: "Gato"
    },
		{
        nombre: "Ramón",
        especie: "Gato"
    }],
    bandaFavorita : {
        nombre : "Nightwish"
    }
}
//* 1. Extrae el segundo pasatiempo y muéstralo en la consola
console.log(usuario.pasatiempos[1]);

//* 2. Extrae el nombre de la banda favorita del usuario y muéstralo en la consola
console.log(usuario.bandaFavorita.nombre);

//* 3. Extrae el nombre de la primera mascota del usuario y muéstralo en la consola
console.log(usuario.mascota[0].nombre);

//* 4. El usuario tiene un nuevo hobby: `“Hornear postres”`. Añádelo a la lista de pasatiempos.
// ¿Cuantos pasatiempos tiene ahora?
usuario.pasatiempos.push("Hornear Postres");
console.log(`Tiene: ${usuario.pasatiempos.length} pasatiempos`);

//*5. Ramón (el ULTIMO gatito en la lista de mascotas) ya murió😢.
/*
    Elimínalo del arreglo.
    ¿Cuántos gatitos hay en el arreglo?
*/
console.log(usuario.mascota.pop())
console.log(`Tiene: ${usuario.mascota.length} mascotas`);