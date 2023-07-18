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
5. Put any custom css in the css file (e.g. for a custom button), qualtrics won't recognize it from the index file
6. For jspsych 7.0+, everywhere jspsych.init() is used, replace with var jspsych = initJsPsych({ //code here})

qualtrics.js contains the javascript used in the question in Qualtrics
