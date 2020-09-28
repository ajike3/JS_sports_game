let teamOneShot = document.querySelector("#teamone-numshots");
let teamTwoShot = document.querySelector("#teamtwo-numshots");
let NumberOfReset = document.querySelector("#num-resets");
let teamOneShootButton = document.querySelector("#teamone-shoot-button");
let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");
let resetButton = document.querySelector("#reset-button");
let teamOneGoal = document.querySelector("#teamone-numgoals");
let teamTwoGoal = document.querySelector("#teamtwo-numgoals");

teamOneShootButton.addEventListener("click", function () {
    playaudio(Audio);
    console.log("1-counter")
    let newCounterValue = Number(teamOneShot.innerHTML) + 1;
    teamOneShot.innerHTML = newCounterValue;
    if (Math.random() <.8) {
      let newteam1Goal = Number(teamOneGoal.innerHTML) + 1;
      teamOneGoal.innerHTML = newteam1Goal;
    }
})
teamTwoShootButton.addEventListener("click", function () {
    playaudio()
    console.log("2-counter");
    let newCounterValue = Number(teamTwoShot.innerHTML) + 1;
    teamTwoShot.innerHTML = newCounterValue;
    if (Math.random() < 0.4) {
      let newteam2Goal = Number(teamTwoGoal.innerHTML) + 1;
      teamTwoGoal.innerHTML = newteam2Goal;
    }
})
resetButton.addEventListener("click", function () {
        newFunction();
    let newCounterValue = Number(NumberOfReset.innerHTML) + 1;
    NumberOfReset.innerHTML = newCounterValue;
        teamTwoShot.innerHTML = 0;
        teamOneShot.innerHTML = 0;
        teamTwoGoal.innerHTML = 0;
        teamOneGoal.innerHTML = 0;
})

function newFunction() {
    console.log("reset-counter");
}
