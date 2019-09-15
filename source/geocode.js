const request=require("request");
const forecast=require("./forecast.js")
const chalk=require("chalk");
const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiYWJoaXNoZWswMSIsImEiOiJjazBnZHlkbGYwNW55M2NxeDlqMmY4bzM1In0.W-F-JYMoFLrnx8Dqq1n4kA";
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("unable to connect !");
        }else if(response.body.features.length===0){
            callback("Something went Wrong ! Try another search");
        }else{
            callback(undefined,[response.body.features[0].center[1],response.body.features[0].center[0],response.body.features[0].place_name])
        }
    })
}
// const address=process.argv[2];
// if(!address){
//     console.log(chalk.red.inverse("Please ! provide an address"));
// }
// else{
// geocode(process.argv[2],(error,data)=>{
//     if(error!==undefined){
//     console.log(chalk.red("error :- "+error));
// }
//     else{
//     console.log(chalk.green("Latitude :- "+data[0]));
//     console.log(chalk.green("Longitude :- "+data[1]));
//     console.log(chalk.green("Place Name :- "+data[2]))


// forecast(data[0],data[1],(error,res)=>{
//     if(error!==undefined){
//         console.log(chalk.red(error));
//     }
//     else{
//         console.log(chalk.blue(`Current time of ${address} is ${res[0]}`));
//         console.log(chalk.yellow(`Current temperature of ${address} is ${res[1]}`));
//     }

// })
// }
// })
// }
module.exports=geocode;