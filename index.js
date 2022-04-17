// code your solution here
// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`   
}

function wrapAdjective (flair = "*"){
    return function(spec = "special"){
        return `You are ${flair}${spec}${flair}!`
    }
}

