// alert("Ok"); To check ki meri js file achhe se link ho gayi ya nahi

const button=document.getElementById("stop-button");

function showTime(){  //To display a time
    const currentTime=new Date();
    // console.log(currentTime);
    const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}` //string interpolation
    // console.log(time);
    document.getElementById("time").innerText=time;

}

// showTime();

// setTimeout();//Ye ek particular function run karega after some seconds and isme second parameter milisecond hota kitne milisecond baad tumhe ye kaam karna kyuki 1 sec me 1000 miliseconds hote hain

// setTimeout(()=>console.log("hi"),5000); //But ye ek baar he chalega

// setInterval(()=> console.log("hello"),5000); //Har 5 sec ke baad kaam karte jao  baar baar

//So

let interval=setInterval(showTime,1000); //Isme function ke under function so callback function

button.addEventListener('click',()=>{
 clearInterval(interval); //clearInterval() is built-in function
})

const updatebutton=document.getElementById("update");
const inputfield=document.querySelector("input");
const timeDisplay=document.getElementById("time");

function Timer(){

    let timeLeft=parseInt(inputfield.value);

    if(isNaN(timeLeft)|| timeLeft<=0){
        alert("Please enter a valid number of seconds:");
        return;
    }

    timeDisplay.innerText=timeLeft;

    let countdown=setInterval(()=>{
        timeLeft--;
        timeDisplay.innerText=timeLeft;

        if(timeLeft<=0){
            clearInterval(countdown);
            timeDisplay.innerText="Time's up!";
        }
    },1000);
}

updatebutton.addEventListener("click",Timer);
