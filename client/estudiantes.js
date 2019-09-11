$.getJSON('http://localhost:8080/estudiantes', (data)=> {
    console.log(data);

    data.forEach(dato => {
        let div = document.getElementById('estudiantes');

        let lista =  document.createElement('ul');
        lista.innerHTML = `<li> ${dato.nombre} ${dato.apellido} </li>`;

        div.appendChild(lista)
    });
});