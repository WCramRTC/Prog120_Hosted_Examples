let basicLoopVals = {
    start: 0,
    end: 5,
    i: 0,
    conditionalOperator: "<",
    step1: 0,
    step2: 1,
    step3: 2,
    step4: 3,
    step5: 4,
    currentStep: 0,
    classArray: ["color-start","color-condition", "color-code", "color-increment", "color-break"],
    firstStep: true
}

window.onload = function() {
    basicForLoop(basicLoopVals);
} // window.onload

function basicForLoop(blv) {
    blv.previousStart = blv.start;
    blv.i = blv.start;
    blv.currentStep = blv.step1;

    const declare = document.getElementById("basic-loop-declare");
    const condition = document.getElementById("basic-loop-condition");
    const increment = document.getElementById("basic-loop-increment");
    const codeBlock = document.getElementById("basic-loop-code-block");
    const output = document.getElementById("basic-loop-output");
    const btnLoopClick = document.getElementById("btn-loop-click");
    const currentSteps = document.getElementsByClassName("current");

    basicLoopDisplay();

    btnLoopClick.addEventListener('click', function() {
        incrementValue();
        basicLoopDisplay();

    }) // btn Event

    declare.addEventListener('change', function() {
        
        updateValues();
        basicLoopDisplay();

    }) // declare.event

    function incrementValue() {
        if(blv.i < blv.end) blv.i++;
    }

    function incrementStep() {

        if(blv.firstStep === true) {
            blv.firstStep = false;
        }

        if(blv.i < blv.end) {
            blv.currentStep = 
            (blv.currentStep === blv.step4) ? 
            blv.step2 : blv.currentStep += 1; 
        }
        else {
            blv.currentStep = blv.step5;
        }


    } //incrementStep()

    function colorBlock(currentStep) {
        clearBlocks();
        currentSteps[currentStep].classList.add(blv.classArray[currentStep]);    
    } // colorBlock

    function clearBlocks() {
        for(let i = 0; i < currentSteps.length; i++) {
            currentSteps[i].classList.remove(blv.classArray[i]);
        }
    } // clearBlocks()

    function defaultValues() {
        blv.i = 0;
        blv.end = 5;
        blv.currentStep = blv.step1;
    } // restart

    function updateValues() {
        let value = parseInt(declare.value);
        blv.start = blv.i = value;
        blv.currentStep = blv.step1;
        // blv.end = end;
        // blv.conditionalOperator = condition;
    }


    function basicLoopDisplay() {
        declare.innerText = `Start = ${blv.start}`;
        condition.innerText = `Condition = ${blv.start} ${blv.conditionalOperator} ${blv.end} `;
        increment.innerText = `Incrementer = ${blv.i}`;
        output.innerText = `Output = ${blv.currentStep}`;
        colorBlock(blv.currentStep);
        incrementStep();
    } // basicLoopDisplay()

} // function()