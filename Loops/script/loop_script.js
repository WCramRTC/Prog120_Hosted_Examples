let basicLoopVals = {
    start: 0,
    end: 5,
    i: 0,
    incBy: 1,
    conditionalOperator: "<=",
    step1: 0,
    step2: 1,
    step3: 2,
    step4: 3,
    step5: 4,
    currentStep: 0,
    classArray: ["color-start","color-condition", "color-code", "color-increment", "color-break"],
    firstStep: true,
    lastStep: false
}

window.onload = function() {
    basicForLoop(basicLoopVals);
} // window.onload

function basicForLoop(blv) {


    const declare = document.getElementById("basic-loop-declare");
    const condition = document.getElementById("basic-loop-condition");
    const increment = document.getElementById("basic-loop-increment");
    const codeBlock = document.getElementById("basic-loop-code-block");
    const operator = document.getElementById("basic-loop-operator");
    const output = document.getElementById("basic-loop-output");
    const btnLoopClick = document.getElementById("btn-loop-click");
    const btnLoopRestart = document.getElementById("btn-loop-restart");
    const incBy = document.getElementById('basic-loop-incBy');

    const curStart = document.getElementById("curStart");
    const curCon = document.getElementById("curCon");
    const curCode = document.getElementById("curCode");
    const curInc = document.getElementById("curInc");
    const curBreak = document.getElementById("curBreak");

    const currentSteps = [
        curStart,
        curCon,
        curCode,
        curInc,
        curBreak
    ]
    
    defaultValues();
    basicLoopDisplay();

    btnLoopClick.addEventListener('click', function() {
        incrementValue();
        basicLoopDisplay();
        checkCondition();
    }) // btn Event

    declare.addEventListener('change', function() {

        updateValues();
        basicLoopDisplay();
        output.innerText = "";

    }) // declare.event

    operator.addEventListener('change', function() {

        updateValues();
        basicLoopDisplay();
        output.innerText = "";

    }) // declare.event

    condition.addEventListener('change', function() {

        updateValues();
        basicLoopDisplay();
        output.innerText = "";


    }) // declare.event

    incBy.addEventListener('change', function() {
        updateValues();
        basicLoopDisplay();
        output.innerText = "";


    }) // declare.event

    btnLoopRestart.addEventListener('click', function() {
        defaultValues();
        basicLoopDisplay();
    }) // btnLoopRestart.event



    function incrementValue() {
        let inc = parseInt(incBy.value);
        if(checkCondition() && blv.currentStep === blv.step4) blv.i += inc;
    }

    function incrementStep() {
        colorBlock(blv.currentStep);
        if(blv.firstStep === true) {
            blv.firstStep = false;
        }
        if(checkCondition()) {
            blv.currentStep = 
            (blv.currentStep === blv.step4) ? 
            blv.step2 : blv.currentStep += 1; 
        }     
        else {
            if(blv.currentStep != blv.step2 && blv.currentStep != blv.step5) {
                blv.currentStep = blv.step2;
            }
            else {
                blv.currentStep = blv.step5;

            }
        }

        if(blv.currentStep === blv.step4 && checkCondition()) {
            output.innerText += `Current Number: ${blv.i} \n`;
        }
        else if (blv.currentStep === blv.step5 && !blv.lastStep) {
            output.innerText += `After The Loop \n`;
            blv.lastStep = true;

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
        blv.incBy = 1;
        blv.currentStep = blv.step1;
        blv.conditionalOperator = "<=";

        blv.lastStep = false;
        blv.previousStart = blv.start;
        blv.i = blv.start;
        blv.currentStep = blv.step1;
        output.innerText = "";
        condition.value = blv.end;
        operator.value = "<=";
        incBy.value = "1";
    } // restart

    function updateValues() {
        let decValue = parseInt(declare.value);
        let opValue = operator.value;
        let endValue = parseInt(condition.value);
        blv.start = blv.i = decValue;
        blv.end = endValue;
        blv.conditionalOperator = opValue;
        blv.currentStep = blv.step1;
        blv.lastStep = false;
        // blv.end = end;
        // blv.conditionalOperator = condition;
    } // updateValues()

    function checkCondition() {
        switch(blv.conditionalOperator) {
            case "<":
                return blv.i < blv.end;
            case "<=":
                return blv.i <= blv.end;
        }
    } // checkCondition

    function basicLoopDisplay() {
        curCon.innerText = `Condition = ${checkCondition()} `;
        curInc.innerText = `i = ${blv.i}`
        output.scrollTop = output.scrollHeight;
        incrementStep();
    } // basicLoopDisplay()

} // function()