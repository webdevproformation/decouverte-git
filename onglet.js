// système onglet

// masquer toutes les div dans le système d'onglet
document.querySelectorAll(".onglet div").forEach( function(el){
    el.classList.add("hide");
})
// afficher uniquement la première div dans onglet
document.querySelectorAll(".onglet div")[0].classList.remove("hide");

this.addEventListener("mousemove", function(el){
    console.log(el)
})
// bouton 
document.querySelectorAll(".onglet button").forEach( function(btn){
    btn.addEventListener("click", function(el){
        let index = el.target.dataset.index;
        console.log(el.target.dataset.titre);
       // console.log(el.target.dataset.index);
        document.querySelectorAll(".onglet div").forEach( function(el){
            el.classList.add("hide");
        })
        document.querySelectorAll(".onglet div")[index].classList.remove("hide");
    } );
})