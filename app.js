
// je veux lorsque clique sur le bouton
// afficher masquer le menu

// je rereclique alors je vais afficher le menu

document.querySelector("button").addEventListener("click", function(){
    document.querySelector("ul").classList.toggle("hide");
})