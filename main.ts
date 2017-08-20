// alert("Hello bandhu !, I have arrived !");  

import {Observable} from 'rxjs';

let numbers= [1,2,3,4,5,6,7]
let source = Observable.from(numbers);
//Here I am hiding the array behind the Observable and produce a stream of data.


/*

When I want to listen to that stream of data, that's when I subscribe to my Observable.
I need to pass in an Observer in the subscribe method.
The Observer, we are going to create very formally int the form of a class
that has to have three methods:-

next() - This is the method by Observable will invoke on my Observer when there is a value to produce.

error() - called when the Observable object produces an error.

complete() - If the observable knows that it has exhausted the data source, it has produced 
all the values it can, t will invoke this complete method.


*/

class MyObserver{

    next(value){
        console.log(value); 
    }

    error(e)
    {
        console.log(`error ${e}`);
    }

    complete(){
        console.log(":we are complete");
    }
}

//Once I have my Obsesrver in place, lets instantiate it an pass it to the subscribe method.
//We are wiring the Observable with the Observer here.
source.subscribe(new MyObserver());


//And yes, you can have multiple subscriber toa single observable.
//Using a class definition is a rather formal way of creating an Observer.