function clockupdate(){
    
    let clock = document.querySelector(".clock");

    let date = new Date();

    
    let hours = String(date.getHours()).padStart(2,'0');
    let min = String(date.getMinutes()).padStart(2,'0');
    let sec = String(date.getSeconds()).padStart(2,'0');

    clock.innerHTML=`${hours}:${min}:${sec}`;
}

setInterval(clockupdate,1000);
clockupdate();


let theme = document.getElementById("theme");

let curtheme="light";
theme.addEventListener("click",()=>{

    if(curtheme==="light"){
        document.querySelector(".maincontainer").style.backgroundColor = "black";
        curtheme="dark";
    }
    else{
        document.querySelector(".maincontainer").style.backgroundColor = "rgba(94, 99, 5, 0.45)";
        curtheme="light";
    }
    
})


