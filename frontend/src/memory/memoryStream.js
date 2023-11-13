/**
 * a stream of Memory objects
 */
class MemoryStream {
    constructor() {

    }
}

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

/**
 * Sends a completion to LLM asking to summarize multiple memories into one.
 * 
 * @param {MemoryStream} memStream
 * 
 * @returns {Memory} that that summarizes 
 */
function reflect(memStream) {
    //TODO: implement
}

/**
 * Will fetch a Memory of a MemoryStream by index number.
 * 
 * @param {MemoryStream} memStream 
 * @param {number} index - a non-negative integer representing 
 * 
 * @returns {Memory}
 */
function retrieveByIndex(memStream, index) {
    //TODO: implement
}

/**
 * Will return a subset MemoryStream of the provided memStream from the startIndex
 * to the endIndex
 * 
 * @param {MemoryStream} memStream - the MemoryStream object to parse
 * @param {number} startIndex - a non-negative starting position to parse inclusively
 * @param {number} endIndex - a non-negative end position to parse inclusively
 * 
 * @returns {MemoryStream} 
 */
function retrieveSubstream(memStream, startIndex, endIndex) {
    //TODO: implement
}