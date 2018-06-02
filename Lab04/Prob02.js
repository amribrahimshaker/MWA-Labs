const os = require('os');
const Rx = require('rxjs');

function checkSystem(){

    console.log("Checking your system...");
    // console.log(os.freemem());
    // console.log(os.cpus().length);
    if( os.freemem() < 4294967296){
        console.log("This app needs at least 4 GB of RAM.");
    }else if(os.cpus().length < 2){
        console.log("Processor is not supported.");
    }else{
        console.log("System is checked successfully.");
    }
    
}
checkSystem();

const myObservable = Rx.Observable.create(observer => {
    observer.next("Checking your system...");
    if( os.freemem() < 4294967296){
        observer.next("This app needs at least 4 GB of RAM.");
    }else if(os.cpus().length < 2){
        observer.next("Processor is not supported.");
    }else{
        observer.next("System is checked successfully.");
    }
});

myObservable.subscribe(msg => console.log(msg));
