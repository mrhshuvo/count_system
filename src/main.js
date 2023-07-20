const btn1 = document.querySelector(".box .start");
const btn2 = document.querySelector(".box .stop");
const btn3 = document.querySelector(".box .reset");
const h1 = document.querySelector(".box h1");



let count = 0;

let counter;


// count start button

btn1.onclick = () =>{

  counter =  setInterval(()=>{

     count++;

     h1.innerHTML = count;

    },1000)
};



// count stop button


btn2.onclick = () =>{

    clearInterval(counter);

};


// count reset button

btn3.onclick = () =>{

    clearInterval(counter);
    
    count = 0;
    
    h1.innerHTML = count;

};



