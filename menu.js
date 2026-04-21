const readline = require("node:readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const votes = {
    breakfast: 0,
    lunch: 0,
    dinner: 0
};


function mealVotes(meal){
    if (meal == "1" || meal == "1."){
        votes.breakfast++;
    }
    else if(meal == "2" || meal == "2."){
        votes.lunch++;
    }
    else if(meal == "3" || meal == "3."){
        votes.dinner++;
    }
}

async function main() {
    let answer;
    let meal;
    do {
        console.info("Pick a meal:");
        console.info("Enter a number that corresponds to the meal or enter 4 to exit.");
        console.info("1. Breakfast");
        console.info("2. Lunch");
        console.info("3. Dinner");
        meal = await rl.question("What meal? ");
        if (meal == "4") break;
        console.info("Enter:");
        console.info("1. To vote");
        console.info("2. To see votes");
        answer = await rl.question("What would you like to do? ");
        console.log(`${answer}`);
        if (answer == "4") break;
        if(answer == "1"){
            const meal = await rl.question("What's your vote? \n 1. Breakfast \n 2. Lunch \n 3. Dinner \n");
            console.log(`${meal}`);
            mealVotes(meal)
        }
        if(answer == "2"){
            console.log("Breakfast votes " + votes.breakfast)
            console.log("Lunch votes " + votes.lunch)
            console.log("Dinner votes " + votes.dinner)
        }
    } while (answer != "4" && meal != "4")

    rl.close();
}

main();