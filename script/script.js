let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        fetch(""+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
            console.log(resp)
        })
    }
    return false;
}

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.lenght > 0)
    {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7520e0a0&s=" +inputBuscarFilme.value, {mode:"cors"})
        .then((resp) => resp.json())
        .then((restp) => {
            console.log(resp);
        })
    }
    return false;
}