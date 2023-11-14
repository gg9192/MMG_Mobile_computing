import { Memory } from "./memory";

/**
 * a collection of Memory objects
 */
class MemoryStream {
    constructor() {

    }
}

/**
 * Sends a completion to LLM asking to summarize multiple memories into one.
 * 
 * @param {MemoryStream} memStream - a MemoryStream to summarize
 * @returns {Memory} a Memory that summarizes the given memStream
 */
function reflect(memStream) {
    //TODO: implement
}

/**
 * Will fetch a Memory of a MemoryStream by index number.
 * 
 * @param {MemoryStream} memStream a MemoryStream to parse
 * @param {number} index - a non-negative integer
 * @returns {Memory} a Memory from memStream at the given index
 */
function retrieveByIndex(memStream, index) {
    //TODO: implement
}

/**
 * Will return a subset MemoryStream of the provided memStream from the startIndex
 * to the endIndex.
 * 
 * @param {MemoryStream} memStream - the MemoryStream to parse
 * @param {number} startIndex - a non-negative starting position to parse inclusively
 * @param {number} endIndex - a non-negative end position to parse inclusively
 * @returns {MemoryStream} 
 */
function retrieveSubstream(memStream, startIndex, endIndex) {
    //TODO: implement
}