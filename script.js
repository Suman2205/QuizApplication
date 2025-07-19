let p=document.getElementById("qus");
let mainDiv=document.querySelector(".qus");
let opt1=document.getElementById("opt1");
let opt2=document.getElementById("opt2");
let opt3=document.getElementById("opt3");
let opt4=document.getElementById("opt4");
let n=1;
let qus=[
    "1. Which HTML5 element is used to define navigation links?",
    "2. In CSS, what does the vw unit stand for?",
    "3. Which of the following methods can be used to select an element by class in JavaScript?",
    "4. What will typeof NaN return in JavaScript?",
    "5. In Flexbox, what does justify-content: space-between do?",
    "6. Which of the following is true about const in JavaScript?",
    "7. What does display: none do to an HTML element?",
    "8. Which hook is used in React to manage local component state?",
    "9. What is the purpose of media queries in CSS?",
    "10. What does the async keyword in JavaScript do?",
    "11. Which tag is used in HTML5 to embed audio?",
    "12. What is the main purpose of ReactDOM.render()?",
    "13. Which of the following tools is commonly used to automatically reload the page on file changes during development?",
    "14. What does the position: relative CSS property do?",
    "15. In JavaScript, what does event.preventDefault() do?"
];
let opts=[
    ["<nav>", "<links>", "<navigate>", "<menu>"],
    ["View width", "Vertical width", "Variable width", "View wrap"],
    ["getElementById()", "querySelector()", "getElementsByTagName()", "getAttribute()"],
    ["NaN", "number", "undefined", "object"],
    ["Adds padding between items", "Aligns items to left", "Distributes items with equal space between them", "Stretches all items equally"],
    ["It creates a constant value and cannot be reassigned", "It cannot store objects", "It is the same as let", "It can only be used globally"],
    ["Makes it transparent", "Removes it from layout and hides it", "Hides but keeps space", "Sends it to the back"],
    ["useProps", "useEffect", "useState", "useReducer"],
    ["Add animations", "Make content responsive", "Improve accessibility", "Minify the code"],
    ["Prevents blocking UI", "Defines a function that always returns a promise", "Automatically retries failed requests", "Pauses the browser execution"],
    ["<sound>", "<media>", "<audio>", "<music>"],
    ["Create components", "Add styling", "Mount React elements to the DOM", "Handle navigation"],
    ["Webpack", "Hot Module Replacement", "Babel", "Git"],
    ["Fixes element to the viewport", "Moves element in relation to its normal position", "Makes element float", "Locks element to the bottom"],
    ["Stops all page scripts", "Prevents page refresh for events like form submission", "Hides the event", "Reloads the DOM"]
];
let ans=[0,0,1,1,2,0,1,2,1,1,2,2,1,1,1];
p.innerText=`${qus[n-1]}`;
opt1.innerText=`${opts[n-1][0]}`;
opt2.innerText=`${opts[n-1][1]}`;
opt3.innerText=`${opts[n-1][2]}`;
opt4.innerText=`${opts[n-1][3]}`;
let options=[];
let digitButtons = [];
for (let i = 1; i <= 4; i++) {
    options.push(document.getElementById("opt" + i));
}
function enableInputs(){
    options.forEach(opt => {
    opt.style.pointerEvents = "auto";
    opt.style.opacity = "1";
    opt.style.cursor = "pointer";
    });
}
function disableInputs(){
    options.forEach(opt => {
        opt.style.pointerEvents = "none";
        opt.style.opacity = "0.5";
        opt.style.cursor = "not-allowed";
    });
}
let score=0;
let btn=document.createElement("button");
btn.id="next";
btn.innerText="Next Question";
let info=document.createElement('p');
function SetP(){
    if(n==15){
        btn.innerText="Result";
    }
    mainDiv.insertAdjacentElement("afterend",info);
    info.insertAdjacentElement("afterend",btn);
    return info;
}
function resetUI() {
    info.remove();
    options.forEach(opt => {
        opt.style.backgroundColor = "";
        opt.style.color="";
    });
    enableInputs();
    btn.remove();
}
options.forEach(opt => {
    opt.addEventListener("click",()=>{
        if(opt.innerText===opts[n-1][ans[n-1]]){
            console.log("True");
            score++;
            opt.style.backgroundColor = "#2ecc71";  // Attractive green
            opt.style.color = "white";
            let p=SetP();
            p.innerText = "✅ Well done! That’s the correct answer!";
            p.style.fontWeight="600";
            disableInputs();
        }
        else{
            console.log("Wrong");
            opt.style.backgroundColor = "#e74c3c";  // Attractive red
            opt.style.color = "white";
            let p=SetP();
            p.style.fontWeight="600";
            p.innerText = `❌ Oops! That’s incorrect. The right answer was "${opts[n-1][ans[n-1]]}".`;
            disableInputs();
        }
    });
});
btn.addEventListener("click",()=>{
    resetUI();
    if(n<qus.length){
        n++;
        p.innerText=`${qus[n-1]}`;
        opt1.innerText=`${opts[n-1][0]}`;
        opt2.innerText=`${opts[n-1][1]}`;
        opt3.innerText=`${opts[n-1][2]}`;
        opt4.innerText=`${opts[n-1][3]}`;
        enableInputs();
    }
    else{
        p.innerText = `🎉 Quiz Completed! You scored ${score} out of 15. Great job!`;
        p.style.fontSize="Larger";
        p.style.fontWeight="bold";
        options.forEach(opt => opt.remove());
        btn.remove();
    }
    
})
