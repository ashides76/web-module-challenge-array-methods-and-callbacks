const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note. 

💡 HINT: You may want to filter the data first 😉*/
const finals2014 = fifaData.filter((item) => {
    return item.Year === 2014 && item.Stage === 'Final'
})
console.log(finals2014);

//(a) Home Team name for 2014 world cup final
console.log(finals2014[0]['Home Team Name'])
//(b) Away Team name for 2014 world cup final
console.log(finals2014[0]['Away Team Name'])
//(c) Home Team goals for 2014 world cup final
console.log(finals2014[0]['Home Team Goals'])
//(d) Away Team goals for 2014 world cup final
console.log(finals2014[0]['Away Team Goals'])
//(e) Winner of 2014 world cup final */
console.log(finals2014[0]['Win conditions'])

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive an array as a parameter that will take the fifa data as its argument
2. Return an array of objects with the data of the teams that made it to the final stage

💡 HINT - you should be looking at the stage key inside of the objects
*/

function getFinals(arr) {
    const finals = arr.filter((item) => {
        return item.Stage === 'Final'
    }) 
    return finals;
}
// console.log(getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(arr, getFinalsCB) {
    const finals = getFinalsCB(arr);
    const years = [];
    finals.forEach((item) => {
        years.push(item.Year);
    })
    // console.log(years.length);
    return years;
}
// console.log(getYears(fifaData, getFinals))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Determines the winner (home or away) of each `finals` game. 
💡 HINT: Don't worry about ties for now (Please see the README file for info on ties for a stretch goal.)
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(arr, getFinalsCB) {
    const finals = getFinalsCB(arr);   
    const winners = [];
    finals.forEach((item) => {
        // if (item['Win conditions'] !== '') {
        //     winners.push(item['Win conditions'].split(' ')[0]);
        // } else {
        //     return 'no winners declared!'
        // }
        if (item['Home Team Goals'] > item['Away Team Goals']) {
            winners.push(item['Home Team Name'])
        } else {
            winners.push(item['Away Team Name'])
        }
    })
    // console.log(winners.length);
    return winners;
}
// console.log(getWinners(fifaData, getFinals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Receive a callback function as the third parameter that will take getYears from task 3 as an argument
4. Receive a callback function as the fourth parameter that will take getWinners from task 4 as an argument
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

💡 HINT: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(arr, getFinalsCB, getYearsCB, getWinnersCB) {
    const years = getYearsCB(arr, getFinalsCB);
    const winners = getWinnersCB(arr, getFinalsCB);
    // const worldCup = [];
    const worldCup = years.map((item,index) => {
         return `In ${item}, ${winners[index]} won the world cup!`;  
    })
    return worldCup;
}
// console.log(getWinnersByYear(fifaData, getFinals, getYears, getWinners))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function `getAverageGoals` to do the following: 
 1. Receive a callback function as a parameter that will take `getFinals` (from task 2) as an argument; ensure you pass in `fifaData` as its argument
 
 💡 HINT: Example of invocation: `getAverageGoals(getFinals(fifaData));`

 2. Calculate the AVERAGE number of the TOTAL home team goals AND TOTAL away team goals scored PER MATCH

 3. Round to the second decimal place and return the value
 
 💡 HINT: use .reduce, .toFixed (refer to MDN for syntax), and do this in 2 steps) 
 
*/
// function getAverageGoals(data) {
//     const averageHomeGoals = data.reduce(function (accumulator, item) {
//         return accumulator + item["Home Team Goals"] + item["Away Team Goals"]
//     }, 0)
//     return (averageHomeGoals / data.length).toFixed(2)
// }
// console.log(getAverageGoals(fifaData));

function getAverageGoals(arr) {
    // const finals = getFinalsCB(arr);
    // console.log(finals);  
    // console.log('length', finals.length); returns 19
    const avgTotals = arr.reduce((total, item) => {
      let sum =  total + item['Home Team Goals'] +  item['Away Team Goals'];
    //   console.log('sum:', sum); //retruns 68
      return sum; //
    },0);
    return (avgTotals/arr.length).toFixed(2);
}
console.log('getAvgGoals:', getAverageGoals(fifaData, getFinals)); 


/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
