const val=document.getElementById("but");
const message=document.getElementById("p1");
const message1=document.getElementById("p2")
const message2=document.getElementById("p3");
const message3=document.getElementById("p4");
const message4=document.getElementById("p5");
const message5=document.getElementById("p6");
const message6=document.getElementById("p7");
const message7=document.getElementById("p8");
const message8=document.getElementById("p9");
const message9=document.getElementById("p10");


val.addEventListener("click",()=>{
    message.textContent="Loading....";
    message1.textContent=" ";
    message2.textContent=" ";
    message3.textContent=" ";
    message4.textContent=" ";
    message5.textContent=" ";
    message6.textContent=" ";
    message7.textContent=" ";
    message8.textContent=" ";
    message9.textContent=" ";

    const address=document.getElementById("address").value;
    fetch("/weather?address="+ address).then((response)=>{
    response.json().then((data)=>{
        if(data.error){    
          message.textContent=data.error;
        }
        else{
            message.textContent="Latitude :- "+data.latitude;
            message1.textContent="Longitude :- "+data.longitude;
            message2.textContent="Location :- "+data.Location;
            message3.textContent="Time (in millisecond) :- "+data.Current_Time;
            message4.textContent="Temperature :- "+data.Current_Temp;
            message5.textContent="Humidity :- "+data.Humidity;
            message6.textContent="Pressure :- "+data.Pressure;
            message7.textContent="Wind Speed :- "+data.Wind_Speed;
            message8.textContent="Cloud Cover :- "+data.Cloud_Cover;
            message9.textContent="Visibility :- "+data.Visibility;
        }     
    })
})
})