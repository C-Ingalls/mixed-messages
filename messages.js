/* Project Goals
    Buld a message generator program using JabaScript
    Use Git version control
    Use command line
    Develop locally on your computer

    Topic for the messages: vicious mockery insults 
*/

//create 3 arrays to store the different phrases 
// *** change array names *** maybe make an object to hold the arrays?
const phrases = {
    beginning: ['start', 'begin'],
    middle: ['funny', 'mid'],
    end: ['message', 'stop']
};

//this function generates the random message then returns it
const generateMessage = () => {
    const randBeginning = Math.floor(Math.random() * phrases.beginning.length);
    const randMiddle = Math.floor(Math.random() * phrases.middle.length);
    const randEnd = Math.floor(Math.random() * phrases.end.length);

    const message = `${phrases.beginning[randBeginning]} ${phrases.middle[randMiddle]} ${phrases.end[randEnd]}`;
    
    return message;
}

// log the message
console.log(generateMessage());