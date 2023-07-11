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

var stopList = [getStim(), getStim(), getStim(), getStim(), getStim()];
var targetList = [getStim(), getStim(), getStim(), getStim(), getStim()];
var novelList = [getStim(), getStim(), getStim(), getStim(), getStim(), getStim(), getStim(), getStim(), getStim(), getStim()];


/* create timeline */
var timeline = [];

var instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>TEST: this is running in the root folder</p>
    <p>The goal of this task is to correctly respond when the number presented on the screen is the same as the number that was presented right before it.
   </p><p>When you see a number that is the same as the number presented right before it, press the purple buton as quickly as possible.</p>
    <p>However, some numbers will turn orange a short time after they appear. Do NOT press the SPACEBAR in this case</p>
   <p>Try to be as accurate as possible while still keeping up with the numbers. </p>
    <p>Press the button below to begin.</p>
  `,
  choices: ['START'],
  post_trial_gap: 2000
};
timeline.push(instructions);

var stop_trial1 = {
    type: jsPsychHtmlButtonResponse,
    choices: ['✓'],
    button_html: '<button class="button">%choice%</button>',
    timeline: [
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[0]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[0]+'</p>', trial_duration: 200, data: {type: 'stop', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#ffc90e">'+stopList[0]+'</p>', trial_duration: 800, data: {type: 'stop', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}}
    ]
}

var stop_trial2 = {
    type: jsPsychHtmlButtonResponse,
    choices: ['✓'],
    button_html: '<button class="button">%choice%</button>',
    timeline: [
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[1]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[1]+'</p>', trial_duration: 200, data: {type: 'stop', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#ffc90e">'+stopList[1]+'</p>', trial_duration: 800, data: {type: 'stop', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}}
    ]
}

var stop_trial3 = {
    type: jsPsychHtmlButtonResponse,
    choices: ['✓'],
    button_html: '<button class="button">%choice%</button>',
    timeline: [
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[2]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[2]+'</p>', trial_duration: 200, data: {type: 'stop', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#ffc90e">'+stopList[2]+'</p>', trial_duration: 800, data: {type: 'stop', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}}
    ]
}

var stop_trial4 = {
    type: jsPsychHtmlButtonResponse,
    choices: ['✓'],
    button_html: '<button class="button">%choice%</button>',
    timeline: [
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[3]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[3]+'</p>', trial_duration: 200, data: {type: 'stop', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#ffc90e">'+stopList[3]+'</p>', trial_duration: 800, data: {type: 'stop', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}}
    ]
}

var stop_trial5 = {
    type: jsPsychHtmlButtonResponse,
    choices: ['✓'],
    button_html: '<button class="button">%choice%</button>',
    timeline: [
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[4]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+stopList[4]+'</p>', trial_duration: 200, data: {type: 'stop', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#ffc90e">'+stopList[4]+'</p>', trial_duration: 800, data: {type: 'stop', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}}
    ]
}

var target_trial1 = {
    type: jsPsychHtmlButtonResponse,
    choices: ['✓'],
    button_html: '<button class="button">%choice%</button>',
    timeline: [
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[0]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[0]+'</p>', trial_duration: 1000, data: {type: 'target', correct_response: 0}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}}
    ],
    data: {
    task: 'target',
    correct_response: null
  },
}



var target_trial2 = {
    type: jsPsychHtmlButtonResponse,
    choices: ['✓'],
    button_html: '<button class="button">%choice%</button>',
    timeline: [
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[1]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[1]+'</p>', trial_duration: 1000, data: {type: 'target', correct_response: 0}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}}
    ],
    data: {
    task: 'target',
    correct_response: null
  },
}


var target_trial3 = {
    type: jsPsychHtmlButtonResponse,
    choices: ['✓'],
    button_html: '<button class="button">%choice%</button>',
    timeline: [
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[2]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[2]+'</p>', trial_duration: 1000, data: {type: 'target', correct_response: 0}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}}
    ],
    data: {
    task: 'target',
    correct_response: null
  },
  on_finish: function(data){
    console.log();
    data.correct = data.response === data.correct_response;
  }
}

var target_trial4 = {
    type: jsPsychHtmlButtonResponse,
    choices: ['✓'],
    button_html: '<button class="button">%choice%</button>',
    timeline: [
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[3]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[3]+'</p>', trial_duration: 1000, data: {type: 'target', correct_response: 0}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}}
    ],
    data: {
    task: 'target',
    correct_response: null
  },
  on_finish: function(data){
    console.log();
    data.correct = data.response === data.correct_response;
  }
}

var target_trial5 = {
    type: jsPsychHtmlButtonResponse,
    choices: ['✓'],
    button_html: '<button class="button">%choice%</button>',
    timeline: [
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[4]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+targetList[4]+'</p>', trial_duration: 1000, data: {type: 'target', correct_response: 0}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}}
    ],
    data: {
    task: 'target',
    correct_response: null
  },
  on_finish: function(data){
    console.log();
    data.correct = data.response === data.correct_response;
  }
}

var novel_trial1 = {
  type: jsPsychHtmlButtonResponse,
  choices: ['✓'],
    button_html: '<button class="button">%choice%</button>',
  timeline: [
  {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+novelList[0]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
  ],
  trial_duration: 1000,
  on_finish: function(data){
    console.log();
    data.correct = data.response === data.correct_response;
  }
};

var novel_trial2 = {
  type: jsPsychHtmlButtonResponse,
  choices: ['✓'],
  button_html: '<button class="button">%choice%</button>',
  timeline: [
  {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+novelList[1]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
  ],
  trial_duration: 1000,
  on_finish: function(data){
    console.log();
    data.correct = data.response === data.correct_response;
  }
};

var novel_trial3 = {
  type: jsPsychHtmlButtonResponse,
  choices: ['✓'],
  button_html: '<button class="button">%choice%</button>',
  timeline: [
  {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+novelList[2]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
  ],
  trial_duration: 1000,
  on_finish: function(data){
    console.log();
    data.correct = data.response === data.correct_response;
  }
};

var novel_trial4 = {
  type: jsPsychHtmlButtonResponse,
  choices: ['✓'],
  button_html: '<button class="button">%choice%</button>',
  timeline: [
  {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+novelList[3]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
  ],
  trial_duration: 1000,
  on_finish: function(data){
    console.log();
    data.correct = data.response === data.correct_response;
  }
};

var novel_trial5 = {
  type: jsPsychHtmlButtonResponse,
  choices: ['✓'],
  button_html: '<button class="button">%choice%</button>',
  timeline: [
  {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+novelList[4]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
  ],
  trial_duration: 1000,
  on_finish: function(data){
    console.log();
    data.correct = data.response === data.correct_response;
  }
};

var novel_trial6 = {
  type: jsPsychHtmlButtonResponse,
  choices: ['✓'],
  button_html: '<button class="button">%choice%</button>',
  timeline: [
  {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+novelList[5]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
  ],
  trial_duration: 1000,
  on_finish: function(data){
    console.log();
    data.correct = data.response === data.correct_response;
  }
};

var novel_trial7 = {
  type: jsPsychHtmlButtonResponse,
  choices: ['✓'],
  button_html: '<button class="button">%choice%</button>',
  timeline: [
  {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+novelList[6]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
  ],
  trial_duration: 1000,
  on_finish: function(data){
    console.log();
    data.correct = data.response === data.correct_response;
  }
};

var novel_trial8 = {
  type: jsPsychHtmlButtonResponse,
  choices: ['✓'],
  button_html: '<button class="button">%choice%</button>',
  timeline: [
  {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+novelList[7]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
  ],
  trial_duration: 1000,
  on_finish: function(data){
    console.log();
    data.correct = data.response === data.correct_response;
  }
};

var novel_trial9 = {
  type: jsPsychHtmlButtonResponse,
  choices: ['✓'],
  button_html: '<button class="button">%choice%</button>',
  timeline: [
  {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+novelList[8]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
  ],
  trial_duration: 1000,
  on_finish: function(data){
    console.log();
    data.correct = data.response === data.correct_response;
  }
}; 

var novel_trial10 = {
  type: jsPsychHtmlButtonResponse,
  choices: ['✓'],
  button_html: '<button class="button">%choice%</button>',
  timeline: [
  {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">'+novelList[9]+'</p>', trial_duration: 1000, data: {type: 'novel', correct_response: null}},
        {stimulus:'<p style="font-size:60px;font-weight:bold;color:#3f48cc">+</p>', trial_duration: 1500, data: {type: 'fixation', correct_response: null}},
  ],
  trial_duration: 1000,
  on_finish: function(data){
    console.log();
    data.correct = data.response === data.correct_response;
  }
};


var task_procedure = {
    //shuffle fn returns timeline list of randomized trials e.g. (novel5, stop3, ...,target1, novel1)
    timeline: shuffle([novel_trial1, novel_trial2, novel_trial3, novel_trial4, novel_trial5, novel_trial6, novel_trial7, novel_trial8, novel_trial9, target_trial1, target_trial2, target_trial3, target_trial4, target_trial5, stop_trial1, stop_trial2, stop_trial3, stop_trial4, stop_trial5]),
}
timeline.push(task_procedure);

/* define debrief */
var debrief_block = {
  type: jsPsychHtmlButtonResponse,
  choices: ['FINISH'],
  stimulus: function() {

    var trials = jsPsych.data.get().filter({type: 'novel'}, {type: 'target'}, {type: 'stop'});
    var correct_trials = trials.filter({correct: true});
    var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
    var rt = Math.round(correct_trials.select('rt').mean());

    return `<p>You responded correctly on ${accuracy}% of the trials.</p>
      <p>Your average response time was ${rt}ms.</p>
      <p>Press the button below to complete the task. Thank you!</p>`;

  }
};
timeline.push(debrief_block); 