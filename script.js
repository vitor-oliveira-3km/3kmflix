
function adicionarFilme() {

    var filmeFavorito = document.getElementById ("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {

        var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
        var elementoListaFilmes = document.getElementById("listaFilmes");
        elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
           
    }else {
        console.error("Endereço de filme invalido")
    }
   document.getElementById ("filme").value = "";
}
















