# GoStopJS

JSPsych version of the GoStop task

5 target trials, 5 stop trials and 20 novel trials

Data recorded: 
-trial type (novel, target or stop)
-stimulus
-response (either null or 0)
-reaction time
-correct (true or false)

To put on qualtrics - 
Follow this tutorial:
https://kywch.github.io/jsPsych-in-Qualtrics/rt-task/
Differences from the tutorial/ Things to keep in mind:
1. The CDN scripts used in 7.0 will not work for this, instead, download the latest version of jsPsych from the github. (https://github.com/jspsych/jsPsych/releases)
2. <base href="/GoStopJS/"> is needed in the index.html file for hosting github pages, but will break the task locally, so comment out this line when testing. Make sure the link in base href is the same name as your github repository
3. Build github pages from the root directory, no need to create a docs folder.
4. Everything can be in one index file
5. For jspsych 7.0+, everywhere jspsych.init() is used, replace with var jspsych = initJsPsych({ //code here})

Code to put in the javascript section of qualtrics:
Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/
// Retrieve Qualtrics object and save in qthis
var qthis = this;
// Hide buttons
qthis.hideNextButton();
var task_github = "https://florencelarkin.github.io/GoStopJS/"; // https://<your-github-username>.github.io/<your-experiment-name>
// requiredResources must include all the JS files that .html uses.
var requiredResources = [
	task_github + "jspsych/jspsych.js",
	task_github + "jspsych/plugin-html-button-response.js", 
	task_github + "jspsych/plugin-html-keyboard-response.js",
	task_github + "jspsych/jspsych.css",
	task_github + "main.js",
	"https://cdn.jsdelivr.net/npm/jstat@latest/dist/jstat.min.js",
    "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",
];
function loadScript(idx) {
    console.log("Loading ", requiredResources[idx]);
    jQuery.getScript(requiredResources[idx], function () {
        if ((idx + 1) < requiredResources.length) {
            loadScript(idx + 1);
        } else {
            initExp();
        }
    });
}
if (window.Qualtrics && (!window.frameElement || window.frameElement.id !== "mobile-preview-view")) {
    loadScript(0);
}
// jQuery is loaded in Qualtrics by default
jQuery("<div id = 'display_stage_background'></div>").appendTo('body');
jQuery("<div id = 'display_stage'></div>").appendTo('body');
function initExp(){
    /* start the experiment*/
    var jsPsych = initJsPsych({		
        /* Change 1: Using `display_element` */
        display_element: 'display_stage',
        on_finish: function() {
			var GoStop = jsPsych.data.get().json();			
            // save to qualtrics embedded data
			Qualtrics.SurveyEngine.setEmbeddedData("GoStop", GoStop);
            // clear the stage
            jQuery('#display_stage').remove();
            jQuery('#display_stage_background').remove();
            // simulate click on Qualtrics "next" button, making use of the Qualtrics JS API
            qthis.clickNextButton();
        }
      }); 
	jsPsych.run(timeline);
    }
//end
});
Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/
});
Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/
});

