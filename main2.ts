import {Observable} from 'rxjs';


let source = Observable.fromEvent(document,"mousemove").map((event:MouseEvent)=> {
  return {x:event.clientX,
          y:event.clientY};
}).delay(500);

//creating an observable
source.subscribe(
    mouseMoveFunc,
    (e) => {console.log(`The error is this: e`);},
    () => {console.log("Completed the observable stream");}
);


function mouseMoveFunc(value){
  let circle = document.getElementById("circle");
  circle.style.top = value.y+"px";
  circle.style.left = value.x+"px";;
  console.log(value);
}