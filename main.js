"use strict"; // Ajout de sécurité

// se déclenche au chargement de la page et ....
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('xhr-button').addEventListener('click', onClickXHRButton)
} );



function onClickXHRButton(){
    var container = document.getElementById("xhr-response");
    container.innerHTML = "Ok je vois !";
}
