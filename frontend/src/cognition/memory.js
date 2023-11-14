/**
 * a snapshot record of a game character's conversations/game events
 */
class Memory {
    constructor(order, time, details) {
        this.order = order      //a higher order indicates that it summarizes previous memories
        this.time = time        //a timestamp of when the memory was formed
        this.details = details  //a string detailing the memory
    }

}