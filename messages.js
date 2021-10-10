/* Project Goals
    Buld a message generator program using JabaScript
    Use Git version control
    Use command line
    Develop locally on your computer

    Topic for the messages: Story Intro
*/

//create an object containing 3 arrays to store the different phrases
const phrases = {
    beginning: ['Once apon a time', 'Previously', 'Last friday', 'Last night', 'Up next', 'Today',],
    middle: ['in a forest', 'on a planet far away', 'in a castle', 'in a fortress', 'somewhere in space', 'in a medow', 'under the sea', 'in a classroom'],
    end: ['the heros fight againt evil', 'the farmer begs for more time', 'the villain prepares his minions for war', 'some guy is doing dishes']
};

//this function generates the random message then returns it
const generateMessage = () => {
    const randBeginning = Math.floor(Math.random() * phrases.beginning.length);
    const randMiddle = Math.floor(Math.random() * phrases.middle.length);
    const randEnd = Math.floor(Math.random() * phrases.end.length);

    const message = `${phrases.beginning[randBeginning]}, ${phrases.middle[randMiddle]}, ${phrases.end[randEnd]}.`;
    
    return message;
}

// log the messag
console.log(generateMessage());