let stopTrials = 20;
let targetTrials = 20;
let novelTrials = 20;
let stimDuration = 500;
let fixDuration = 1000;
let interval = 150;

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
let pracList = [];

function createPractice() {
  var stopPrac = []; //20 stop, 40 trials
    var targetPrac = []; //20 target, 40 trials
    var novelPrac = []; //20 novel
    for (var i = 0; i < 3; i++) { 
      stopPrac.push(getStim())
    }
    for (var i = 0; i < 3; i++) { 
      targetPrac.push(getStim())
    }
    for (var i = 0; i < 3; i++) { 
      novelPrac.push(getStim())
    }
    console.log(novelPrac)
    for (var i = 0; i < 3; i++) {
      var stopPractice =  {
          type: jsPsychHtmlKeyboardResponse,
          choices: "ALL_KEYS",
          button_html: '<button class="button">%choice%</button>',
          response_ends_trial: false,
          timeline: [
              {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopPrac[i]+'</p><p style="font-size:30px;font-weight:bold;color:#3f48cc"><br><br>Wait...</p>', trial_duration: stimDuration, stimulus_duration: stimDuration, data: {type: 'novel', correct_response: null}},
              {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p><p style="font-size:30px;font-weight:bold;color:#3f48cc"><br><br>Wait...</p>', trial_duration: fixDuration, stimulus_duration: fixDuration, data: {type: 'fixation', correct_response: null}},
              {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopPrac[i]+'</p><p style="font-size:30px;font-weight:bold;color:#3f48cc"><br><br>Wait...</p>', trial_duration: interval, stimulus_duration: interval, data: {type: 'stop', correct_response: null}},
              {stimulus:'<p style="font-size:60px;font-weight:bold;color:#ffc90e">'+stopPrac[i]+'</p><p style="font-size:30px;font-weight:bold;color:#ffc90e"><br><br>DON\'T press anything!!</p>', trial_duration: stimDuration - interval, stimulus_duration: stimDuration - interval, data: {type: 'stop', correct_response: null}},
              {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p><p style="font-size:30px;font-weight:bold;color:#ffc90e"><br><br>DON\'T press anything!!</p>', trial_duration: fixDuration, stimulus_duration: fixDuration, data: {type: 'fixation', correct_response: null}}
          ],
          on_finish: function(data){
            console.log();
            data.correct = data.response === data.correct_response;
          }
      }
      pracList.push(stopPractice)
  }
  for (var i = 0; i < 3; i++) {
     var targetPractice =  {
          type: jsPsychHtmlKeyboardResponse,
          choices: "ALL_KEYS",
          button_html: '<button class="button">%choice%</button>',
          response_ends_trial: false,
          timeline: [
              {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetPrac[i]+'</p><p style="font-size:30px;font-weight:bold;color:#3f48cc"><br><br>Wait...</p>', trial_duration: stimDuration, stimulus_duration: stimDuration, data: {type: 'novel', correct_response: null}},
              {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p><p style="font-size:30px;font-weight:bold;color:#3f48cc"><br><br>Wait...</p>', trial_duration: fixDuration, stimulus_duration: fixDuration, data: {type: 'fixation', correct_response: null}},
              {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetPrac[i]+'</p><p style="font-size:30px;font-weight:bold;color:#3f48cc"><br><br>Press the SPACEBAR!</p>', trial_duration: stimDuration, stimulus_duration: stimDuration, data: {type: 'target', correct_response: ' '}},
              {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p><p style="font-size:30px;font-weight:bold;color:#3f48cc"><br><br>Press the SPACEBAR!</p>', trial_duration: fixDuration, stimulus_duration: fixDuration, data: {type: 'fixation', correct_response: null}}
          ],
          on_finish: function(data){
            console.log();
            data.correct = data.response === data.correct_response;
          }
      }
      pracList.push(targetPractice)
  }
  for (var i = 0; i < 3; i++) {
      var novelPractice = {
          type: jsPsychHtmlKeyboardResponse,
          choices: ['✓'],
            button_html: '<button class="button">%choice%</button>',
            response_ends_trial: false,
          timeline: [
          {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+novelPrac[i]+'</p><p style="font-size:30px;font-weight:bold;color:#3f48cc"><br><br>Wait...</p>', trial_duration: stimDuration,  stimulus_duration: stimDuration, data: {type: 'novel', correct_response: null}},
          {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p><p style="font-size:30px;font-weight:bold;color:#3f48cc"><br><br>Wait...</p>', trial_duration: fixDuration,  stimulus_duration: fixDuration, data: {type: 'fixation', correct_response: null}},
          ],
          on_finish: function(data){
            console.log();
            data.correct = data.response === data.correct_response;
          }
        }
       pracList.push(novelPractice)
   }
   return pracList
}

function createTrials(stopTrials, targetTrials, novelTrials) {
    var stopList = []; //20 stop, 40 trials
    var targetList = []; //20 target, 40 trials
    var novelList = []; //20 novel
    for (var i = 0; i < stopTrials; i++) { 
      stopList.push(getStim())
    }
    for (var i = 0; i < targetTrials; i++) { 
      targetList.push(getStim())
    }
    for (var i = 0; i < novelTrials; i++) { 
      novelList.push(getStim())
    }
    console.log(stopList)
    let List = [];
for (var i = 0; i < stopTrials; i++) {
    var stopTrial =  {
        type: jsPsychHtmlKeyboardResponse,
        choices: "ALL_KEYS",
        button_html: '<button class="button">%choice%</button>',
        response_ends_trial: false,
        timeline: [
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[i]+'</p>', trial_duration: stimDuration, stimulus_duration: stimDuration, data: {type: 'novel', correct_response: null}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: fixDuration, stimulus_duration: fixDuration, data: {type: 'fixation', correct_response: null}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[i]+'</p>', trial_duration: interval, stimulus_duration: interval, data: {type: 'stop', correct_response: null}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#ffc90e">'+stopList[i]+'</p>', trial_duration: stimDuration - interval, stimulus_duration: stimDuration - interval, data: {type: 'stop', correct_response: null}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: fixDuration, stimulus_duration: fixDuration, data: {type: 'fixation', correct_response: null}}
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
        type: jsPsychHtmlKeyboardResponse,
        choices: "ALL_KEYS",
        button_html: '<button class="button">%choice%</button>',
        response_ends_trial: false,
        timeline: [
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[i]+'</p>', trial_duration: stimDuration, stimulus_duration: stimDuration, data: {type: 'novel', correct_response: null}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: fixDuration, stimulus_duration: fixDuration, data: {type: 'fixation', correct_response: null}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[i]+'</p>', trial_duration: stimDuration, stimulus_duration: stimDuration, data: {type: 'target', correct_response: 'Space'}},
            {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: fixDuration, stimulus_duration: fixDuration, data: {type: 'fixation', correct_response: null}}
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
        type: jsPsychHtmlKeyboardResponse,
        choices: ['✓'],
          button_html: '<button class="button">%choice%</button>',
          response_ends_trial: false,
        timeline: [
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+novelList[i]+'</p>', trial_duration: stimDuration,  stimulus_duration: stimDuration, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: fixDuration,  stimulus_duration: fixDuration, data: {type: 'fixation', correct_response: null}},
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
    <p>When you see a number that is the same as the number presented right before it, press the SPACEBAR as quickly as possible.</p><br></br>
    <p>However, some numbers will turn orange a short time after they appear. Do NOT press the SPACEBAR in this case</p><br></br>
   <p>Try to be as accurate as possible while still keeping up with the numbers. </p>
    <p>Press the button below to try a short practice.</p>
  `,
  choices: ['START'],
  post_trial_gap: 1000
};
timeline.push(instructions2);

var practice_procedure = {

 timeline: shuffle(createPractice()),
}
timeline.push(practice_procedure);

var instructions3 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>You finished the practice section!</p><br></br>
    <p>The real task is exactly the same except you will not get any coaching.</p><br></br>
    <p>If you have any questions, please consult study staff</p><br></br>
    <p>Press the button below to start the task.</p>
  `,
  choices: ['START'],
  post_trial_gap: 1000
};

timeline.push(instructions3);

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

