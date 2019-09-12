$.getJSON('http://localhost:8080/estudiantes', (data)=> {
    console.log(data);

    data.forEach(dato => {
        let div = document.getElementById('estudiantes');

        let lista =  document.createElement('ul');
        lista.innerHTML = `<li class='student-li'> ${dato.nombre} ${dato.apellido} </li>`;

        div.appendChild(lista)
    });
});

$('#add-student').click(()=>{
    $('.form').toggleClass('d-none');
    $('#add-student').toggleClass('d-none');
    $('.cancel-btn').toggleClass('d-none');
})

$('.cancel-btn').click(()=> {
    $('.form').toggleClass('d-none');
    $('#add-student').toggleClass('d-none');
    $('.cancel-btn').toggleClass('d-none');
});