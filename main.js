let stopTrials = 5;
let targetTrials = 5;
let novelTrials = 10;

function getStim() {
    var number = Math.floor(Math.random() * 90000) + 10000;
    number.toString();
    return number;
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
    }

    return array;
}

function createTrials(stopTrials, targetTrials, novelTrials) {
    var stopList = [getStim(), getStim()];
    var targetList = [getStim(), getStim()];
    var novelList = [getStim(), getStim(), getStim(), getStim()];
    let List = [];
for (var i = 0; i < stopTrials; i++) {
    var stopTrial =  {
        type: jsPsychHtmlButtonResponse,
        choices: ['✓'],
        button_html: '<button class="button">%choice%</button>',
        response_ends_trial: false,
        timeline: [
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[i]+'</p>', trial_duration: 1000, stimulus_duration: 1000, data: {type: 'novel', correct_response: null}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, stimulus_duration: 1500, data: {type: 'fixation', correct_response: null}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[i]+'</p>', trial_duration: 200, stimulus_duration: 200, data: {type: 'stop', correct_response: null}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#ffc90e">'+stopList[i]+'</p>', trial_duration: 800, stimulus_duration: 800, data: {type: 'stop', correct_response: null}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, stimulus_duration: 1500, data: {type: 'fixation', correct_response: null}}
        ],
        on_finish: function(data){
          console.log();
          data.correct = data.response === data.correct_response;
        }
    }
    List.push(stopTrial)
}
for (var i = 0; i < targetTrials; i++) {
   var targetTrial =  {
        type: jsPsychHtmlButtonResponse,
        choices: ['✓'],
        button_html: '<button class="button">%choice%</button>',
        response_ends_trial: false,
        timeline: [
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[i]+'</p>', trial_duration: 1000, stimulus_duration: 1000, data: {type: 'novel', correct_response: null}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, stimulus_duration: 1500, data: {type: 'fixation', correct_response: null}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[i]+'</p>', trial_duration: 1000, stimulus_duration: 1000, data: {type: 'target', correct_response: 0}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, stimulus_duration: 1500, data: {type: 'fixation', correct_response: null}}
        ],
        on_finish: function(data){
          console.log();
          data.correct = data.response === data.correct_response;
        }
    }
    List.push(targetTrial)
}
for (var i = 0; i < novelTrials; i++) {
    var novelTrial = {
        type: jsPsychHtmlButtonResponse,
        choices: ['✓'],
          button_html: '<button class="button">%choice%</button>',
          response_ends_trial: false,
        timeline: [
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+novelList[i]+'</p>', trial_duration: 1000,  stimulus_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500,  stimulus_duration: 1500, data: {type: 'fixation', correct_response: null}},
        ],
        on_finish: function(data){
          console.log();
          data.correct = data.response === data.correct_response;
        }
      }
     List.push(novelTrial)
 }
return List;
}

var timeline = [];

var instructions1 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>The goal of this task is to correctly respond when the number presented on the screen is the same as the number that was presented right before it.
    <p>Press next for more instructions.</p>
  `,
  choices: ['NEXT'],
  post_trial_gap: 1000
};
timeline.push(instructions1);

var instructions2 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>When you see a number that is the same as the number presented right before it, press the purple button as quickly as possible.</p><br></br>
    <p>However, some numbers will turn orange a short time after they appear. Do NOT press the purple button in this case</p><br></br>
   <p>Try to be as accurate as possible while still keeping up with the numbers. </p>
    <p>Press the button below to begin.</p>
  `,
  choices: ['START'],
  post_trial_gap: 1000
};
timeline.push(instructions2);

var task_procedure = {
    //shuffle fn returns timeline list of randomized trials e.g. (novel5, stop3, ...,target1, novel1)
    timeline: shuffle(createTrials(stopTrials,targetTrials,novelTrials)),
}
timeline.push(task_procedure);


var complete_screen = {
  type: jsPsychHtmlButtonResponse,
  choices: ['FINISH'],
  stimulus: 'Press the button below to complete the task. Thank you!' }

timeline.push(complete_screen); 

