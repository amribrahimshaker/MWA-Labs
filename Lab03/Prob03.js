//import
const EventEmitter = require('events');

//extend
class Clock extends EventEmitter {
    constructor() {
        super();

        //setInterval(() => {this.emit('tick')}, 1000);
    }
    start(){
        //emit
        setInterval(() => {this.emit('tick')}, 1000);
    }
}

//init
const clock = new Clock();

//addListener
clock.on('tick', () => console.log('woohoo'));

//emit
//setInterval(() => clock.emit('tick'), 1000)

clock.start();
console.log('Done')
