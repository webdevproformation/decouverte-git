
let requete = new XMLHttpRequest();

requete.open("get", "https://jsonplaceholder.typicode.com/posts");

requete.send();

requete.onload = function(){
    console.log(JSON.parse(requete.responseText));
}
