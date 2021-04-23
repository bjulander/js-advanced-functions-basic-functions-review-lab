// Your code here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

 function wrapAdjective(style="*"){
    return function(arg="special"){
        return `You are ${style}${arg}${style}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a + b
    },
    subtract: function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a / b
    }
}

let actionApplyer = function(integer, ray) {
    for (let i = 0; i < ray.length; i++ ){
        integer = ray[i](integer)
    }
  
    return integer
  }
