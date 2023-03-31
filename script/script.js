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
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7520e0a0&s=" +inputBuscarFilme.value)
        .then((resp) => resp.json())
        .then((resp) => {
            resp.Search.forEach((item) => {
                console.log(item);
                let filme = new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
        })
    }
    return false;
}

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    console.log(listaFilmes);
    if(filme.lenght > 0)
    {
        filmes.forEach(async(filme) =>{
            listaFilmes.appendChild(await filme.getCard());
        })
    }
}