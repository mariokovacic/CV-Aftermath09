"use strict"

// JUST IN CASE VARIABLES TO USE AND MANIPULATE ELEMENTS
// TITLE

const title = document.getElementById("MK");
const svg1 = document.getElementsByTagName("svg1");
const svg2 = document.getElementsByTagName("svg2");

const fileDatabase = document.getElementById("fileDatabase");

// TIMELINE
const experiences = document.getElementById("experiences");
const education = document.getElementById("education");
const educationDATA = document.getElementById("educationDATA");

// --------
const intro = document.getElementById("intro");
const file1 = document.getElementById("file1");
const file2 = document.getElementById("file2");
const file3 = document.getElementById("file3");
const file4 = document.getElementById("file4");
const file5 = document.getElementById("file5");
const file6 = document.getElementById("file6");
const file7 = document.getElementById("file7");
const file8 = document.getElementById("file8");
const file9 = document.getElementById("file9");

// SLIDE TIMELINE
const intro0 = document.getElementById("intro0");
const file01 = document.getElementById("file01");
const file02 = document.getElementById("file02");
const file03 = document.getElementById("file03");
const file04 = document.getElementById("file04");
const file05 = document.getElementById("file05");
const file06 = document.getElementById("file06");
const file07 = document.getElementById("file07");
const file08 = document.getElementById("file08");
const file09 = document.getElementById("file09");

// ----------------------

// FILES

const files = document.getElementById("files");

const intro0section = document.getElementById("intro0section");
const file01section = document.getElementById("file01section");
const file02section = document.getElementById("file02section");
const file03section = document.getElementById("file03section");
const file04section = document.getElementById("file04section");
const file05section = document.getElementById("file05section");
const file06section = document.getElementById("file06section");
const file07section = document.getElementById("file07section");
const file08section = document.getElementById("file08section");
const file09section = document.getElementById("file09section");

// ----------------------

// BACK OPTIONS 

const backX1 = document.getElementById("backX1");
const backX2 = document.getElementById("backX2");
const goBack = document.getElementById("goBack");

// ON CLICK TIMELINE

const h4 = document.getElementsByTagName("h4");


const timeline = document.getElementById("timeline");
const timelineSlide = document.getElementById("timelineSlide");
const background = document.getElementById("background");

fileDatabase.addEventListener("click", function () {

    // remove subject files
    fileDatabase.classList.add("hide");

    // timeline change
    timeline.classList.add("hide");
    timelineSlide.classList.remove("hide");
    timelineSlide.classList.add("changeTimeline");


    // show/hide files
    experiences.classList.remove("hide");
    education.classList.remove("hide");


    // back option
    backX1.classList.remove("hide");
    backX2.classList.remove("hide");
    goBack.classList.remove("hide");

});

experiences.addEventListener("click", function () {


    // reveal slider
    podaciMain.classList.remove("hide");


    // remove the title
    title.classList.add("hide");
    title.style.display = "none";

    // back option
    backX1.classList.add("hide");
    backX2.classList.add("hide");
    goBack.classList.add("hide");

    // timeline change
    timeline.classList.add("hide");
    timelineSlide.classList.add("hide");
    timelineSlide.classList.remove("changeTimeline");

    // remove menu
    experiences.classList.add("hide");
    education.classList.add("hide");

    // return SUBJECT FILES
    fileDatabase.classList.remove("hide");

    // remove education part
    educationDATA.classList.add("hide");
    educationDATA.classList.remove("educationStyle")

});

education.addEventListener("click", function () {

    educationDATA.classList.remove("hide");
    educationDATA.classList.add("educationStyle")

    // remove the title
    title.classList.add("hide");
    title.style.display = "none";

    // hide slider
    podaciMain.classList.add("hide");

    // remove menu
    experiences.classList.add("hide");
    education.classList.add("hide");

    // return SUBJECT FILES
    fileDatabase.classList.remove("hide");

    // back option
    backX1.classList.add("hide");
    backX2.classList.add("hide");
    goBack.classList.add("hide");

});


// --------- BACK OPTION ---------------------

goBack.addEventListener("click", function () {

    // timeline change
    timeline.classList.remove("hide");
    timelineSlide.classList.add("hide");
    timelineSlide.classList.remove("changeTimeline");
    timelineSlide.classList.add("transformITback")

    // show/hide files
    experiences.classList.add("hide");
    experiences.classList.add("transformITback");
    education.classList.add("hide");
    education.classList.add("transformITback");

    // back option

    backX1.classList.add("hide");
    backX2.classList.add("hide");
    goBack.classList.add("hide");

    // remove subject files
    fileDatabase.classList.remove("hide");

    // slider hide
    podaciMain.classList.add("hide");


    // add title
    title.classList.remove("hide");
    intro0section.classList.remove("hide");

    // remove education part
    educationDATA.classList.add("hide");
    educationDATA.classList.remove("educationStyle");




})


experiences.addEventListener("click", function () {


    const svg1 = document.getElementById("svg1");
    svg1.classList.add("goDown");




})