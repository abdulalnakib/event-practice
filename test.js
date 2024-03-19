// to use one button for several elements
document.getElementById('buttonId').addEventListener('click', function () {
    //element store the elements in a variable with class name
    const classesVariable = document.getElementsByClassName('className');
    //use for/of loop to apply the actions for each elements
    //(in this case color will change change to red when button is clicked)
    for (const classVariable of classesVariable) {
        classVariable.style.color = "red";
    }
})