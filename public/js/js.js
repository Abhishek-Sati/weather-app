const val=document.getElementById("but");
const message=document.getElementById("p1");
const message1=document.getElementById("p2")
const message2=document.getElementById("p3");
const message3=document.getElementById("p4");
const message4=document.getElementById("p5");

val.addEventListener("click",()=>{
    message.textContent="Loading....";
    message1.textContent="";
    message2.textContent=" ";
    message3.textContent=" ";
    message4.textContent=" ";

    const address=document.getElementById("address").value;
    fetch("/weather?address="+ address).then((response)=>{
    response.json().then((data)=>{
        if(data.error){    
          message.textContent=data.error;
        }
        else{
            message.textContent="Latitude :- "+data.latitude;
            message1.textContent="Longitude :- "+data.longitude;
            message2.textContent="Locatiion :- "+data.Location;
            message3.textContent="Current Time :- "+data.Current_Time;
            message4.textContent="Current Temperature :- "+data.Current_Temp;
        }     
    })
})
})