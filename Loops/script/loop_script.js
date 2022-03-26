window.onload = function() {
    basicForLoop();
} // window.onload

function basicForLoop() {
    const declare = document.getElementById("basic-loop-declare");
    const condition = document.getElementById("basic-loop-condition");
    const increment = document.getElementById("basic-loop-increment");
    const codeBlock = document.getElementById("basic-loop-code-block");
    const output = document.getElementById("basic-loop-output");

    let start = 0;
    let end = 5;
    let cond;
    let i;

    for(i = start; cond = i < end ; i++) {

        // codeBlock.innerText = "4";
        // output.innerText = "5";
        setTimeout(() => {basicLoopDisplay()}, 2000);
    }



    function basicLoopDisplay() {
        declare.innerText = `Start = ${start}`;
        condition.innerText = `Condition = ${cond}`;
        increment.innerText = `Incrementer = ${i}`;
    }

}