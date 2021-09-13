const numeros = [20,40,20,80,100]
let alumnos = [
    {nombre:"Ricardo",n1:20,n2:30},
    {nombre:"Gabriel",n1:50,n2:40},
    {nombre:"Marcos",n1:10,n2:30},
    {nombre:"Roberto",n1:40,n2:50},
    {nombre:"Andrea",n1:50,n2:10},
    {nombre:"Emily",n1:30,n2:20}
]
console.clear()
//console.log(numeros,alumnos)

for (let index = 0; index < alumnos.length; index++)
    //console.log("alumnos -->",alumnos[index].nombre)

alumnos.forEach(alumno => {
    prom = alumno.n1+alumno.n2
    //console.log(alumno.nombre,prom)
});
alumnos.map(alumno => {
    prom = alumno.n1+alumno.n2
    //console.log(alumno.nombre,prom)
});

const item = alumnos.map(alumno => {
    prom = (alumno.n1+alumno.n2)/2
    return [alumno.nombre,prom]
});

//console.log(item)

const items = alumnos.filter(alumno => alumno.nombre!="Emily");

alumnos=[...items]
console.log(items)