const { welcome, goodbye, tell } = require("../utils/fortune-teller");


function getFortune(question) {
    let fortune = tell(question);
    return tell(question)
        .then ((fortune) => [
            `Your question was: ${question}`,
            `Your fortune is: ${fortune}`,
        ])
        .catch((error) => `There was an error: ${error}`);
}

function fullSession(question) {
    return welcome()
        .then((welcomeMessage) => 
            getFortune(question).then((fortune) => [welcomeMessage].concat(fortune))
        )
        .then((messSoFar) => 
            goodbye().then((goodByeMessage) => messSoFar.concat(goodByeMessage))
        )
}

module.exports = { getFortune, fullSession };
