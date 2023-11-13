/**
 * a stream of Memory objects
 */
class MemoryStream {
    constructor() {

    }
}

/**
 * represents a 
 */
class Memory {
    constructor(order, time, details) {
        this.order = order      //a higher order indicates that it summarizes previous memories
        this.time = time        //a timestamp of when the memory was formed
        this.details = details  //a string detailing the memory
    }

}


function reflect(memories) {

}

/**
 * 
 * @param {MemoryStream} memStream 
 * @param {number} index - a non-negative integer representing 
 * 
 * @returns {Memory}
 */
function retrieveByIndex(memStream, index) {

}

/**
 * 
 * @param {MemoryStream} memStream - the MemoryStream object to parse
 * @param {number} startIndex - a non-negative starting position to parse inclusively
 * @param {number} endIndex - a non-negative end position to parse inclusively
 * 
 * @returns {MemoryStream} 
 */
function retrieveSubstream(memStream, startIndex, endIndex) {

}