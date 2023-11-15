const inp=document.querySelector('.input input');
const but=document.querySelector('.input button');

var output=document.querySelectorAll('.output p');


//For Enter Button on Input
inp.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      but.click();
    }
  });

but.addEventListener("click",()=>{
    let n=inp.value;
    if(n=="")
    {
        window.alert("Please Enter the Number");
    }
})

    const randomNumber=Math.random()*100;   //generate random number
    var Num=Math.round(randomNumber);  //round it off
    console.log(Num);

but.addEventListener("click",()=>{
    let n=inp.value;  //take input from user
    var i=0;   //To count the number of chances
    n=Number(n);   //convert string to number
    output[0].style.fontWeight="bolder";
    output[1].style.fontWeight="bolder";
    if(n>Num)
    {
        
        console.log("your num is greater than Num")
        output[0].innerHTML="Your Number is Greater Than Orginal Number."
        i++;
        console.log(typeof i)
        inp.value="";

    }
    else if(n=="")
    {
        
    }
    else if(n<Num){
        // Your num is less than The num
        output[0].innerHTML="Your Number is Lesser Than Orginal Number."
        i++;
        inp.value="";
    }
    else{
        // this is right
        output[0].innerHTML="You Choose The Right Number."

        output[1].innerHTML="Number of Chances to Get The Number:"+i;
        inp.value="";
    }

    



    
    
    
})