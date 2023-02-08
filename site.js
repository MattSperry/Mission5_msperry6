// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//get number grade from form
$("#calculate").click(function () {
    let iAssignments = $("#assignments").val();
    let iGroupProjects = $("#groupProjects").val();
    let iQuizes = $("#quizes").val();
    let iMidterm = $("#midterm").val();
    let iFinal = $("#final").val();
    let iIntex = $("#intex").val();
    let sGrade = "";

    //grade weights
    let assignments = 0.5;
    let groupProjects = 0.1;
    let quizes = 0.1;
    let midterm = 0.1;
    let final = 0.1;
    let intex = 0.1;

    let aSum = iAssignments * assignments;
    let gSum = iGroupProjects * groupProjects;
    let qSum = iQuizes * quizes;
    let mSum = iMidterm * midterm;
    let fSum = iFinal * final;
    let iSum = iIntex * intex;

    let iGrade = aSum + gSum + qSum + mSum + fSum + iSum

    //assign proper letter grade
    if (iGrade < 60) {
        sGrade = "F"
    } else if (iGrade < 64) {
        sGrade = "D-"
    } else if (iGrade < 67) {
        sGrade = "D"
    } else if (iGrade < 70) {
        sGrade = "D+"
    } else if (iGrade < 74) {
        sGrade = "C-"
    } else if (iGrade < 77) {
        sGrade = "C"
    } else if (iGrade < 80) {
        sGrade = "C+"
    } else if (iGrade < 84) {
        sGrade = "B-"
    } else if (iGrade < 87) {
        sGrade = "B"
    } else if (iGrade < 90) {
        sGrade = "B+"
    } else if (iGrade < 95) {
        sGrade = "A-"
    } else {
        sGrade = "A"
    }

    //display letter grade
    if (iGrade >= 0 && iGrade <= 100) {
        $("#display").html("Your letter grade is " + sGrade)
    } else {
        $("#display").html("Percent grade must be between 0 and 100.")
    }

})
