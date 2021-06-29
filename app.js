var button = document.querySelector("#btn-translate");
var input = document.querySelector("#input-txt");
var output = document.querySelector("#output-txt");
var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function constructUrl(text){
    var url = serverUrl+"?"+"text="+text
    return url
}
function errorHandler(error){
    console.log("error ocurred: ",error);
    alert("Something wrong with server, please try again after some time")
}
function clickHandler(){ 
    fetch(constructUrl(input.value))
    .then(response => response.json())
    .then(json => {output.innerText = json.contents.translated
    } )
    .catch(errorHandler)
}
button.addEventListener("click",clickHandler)