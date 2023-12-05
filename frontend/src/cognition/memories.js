global.butlerMemories = [];
global.victoriaMemories = [];
global.edwardMemories = [];
global.emilyMemories = [];

export function saveMemories(mems, character){
    if (character == "Butler"){
        for (const m of mems){
            global.butlerMemories.push(m);
        }
    } 
    if (character == "Lady Victoria"){
        for (const m of mems){
            global.victoriaMemories.push(m);
        }
    } 
    if (character == "Emily Greybook"){
        for (const m of mems){
            global.emilyMemories.push(m);
        }
    } 
    if (character == "Edward Greybook"){
        for (const m of mems){
            global.edwardMemories.push(mems);
        }
    } 
}
    
export function getMemories(character){
    if (character == "Butler"){
        return global.butlerMemories;
    } else if (character == "Lady Victoria"){
        return global.victoriaMemories;
    } else if (character == "Emily Greybook"){
        return global.emilyMemories;
    } else if (character == "Edward Greybook"){
        return global.edwardMemories;
    } else {
        throw new Error("character given not valid!");
    }
}