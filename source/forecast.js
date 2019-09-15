const request=require("request");
const forecast=(latitude,longitude,callback)=>{
    const url="https://api.darksky.net/forecast/8121bc63a1031b3b728b616232350fab/" + latitude+ "," + longitude; 
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("You are not Connected to the Internet ! Please check your connection");
        }
        else if(response.body.error){
            callback("Invalid URL ! please check the URL");
        }
        else{
            callback(undefined,[response.body.currently.time,response.body.currently.temperature,response.body.currently.humidity,response.body.currently.pressure,response.body.currently.windSpeed,response.body.currently.cloudCover,response.body.currently.visibility]);
        }
    })
}
module.exports=forecast;
