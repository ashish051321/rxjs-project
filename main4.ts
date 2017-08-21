import { Observable } from 'rxjs';

console.log("We are in !");

let outputdiv = document.getElementById("output");
let mybutton = document.getElementById("fetchdata");

outputdiv.innerHTML = "Ok, this is my sample output !";


let click = Observable.fromEvent(mybutton, "click");

////
function loadData(url: string) {
//I am returning an Observable
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.addEventListener("load", function () {
            let data = JSON.parse(xhr.responseText);
            observer.next(data);
            observer.complete();
        });
    });


}//function lodaData ends

function renderMovies(movies) {
    movies.forEach(element => {
        let div = document.createElement("div");
        div.innerText = element.name;
        outputdiv.appendChild(div);
    });

}

click.flatMap(e => loadData("MOCK_DATA.json")).subscribe(renderMovies);
//We dont want to write the below given code, because the flatMap operator 
// is meant especially for this purpose.

/*
 click.subscribe(
    (myevent) => {
        loadData("MOCK_DATA.json").subscribe(
            renderMovies,
            () => { console.log("some error"); },
            () => {
                console.log("Completed");
            }
        );
    },
    (err1) => { },
    () => { console.log("completed"); }
);

*/

