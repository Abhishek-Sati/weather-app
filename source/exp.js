const path=require("path");
const express=require("express");
const hbs=require("hbs");
const geocode=require("./geocode.js");
const forecast=require("./forecast.js");
const port=process.env.PORT || 8000;
const app=express();
// console.log(path.join(__dirname,'../public'))   //define path for express dir
//  app.use(express.static(__dirname,"public"))
const publicdirpath=path.join(__dirname,'../public');
const viewsdir=path.join(__dirname,"../template/views");
const partialspath=path.join(__dirname,"../template/partials")


//setup handle bars :-
app.set('view engine','hbs');
app.set("views",viewsdir);
//setup partials :-
hbs.registerPartials(partialspath);
// Setup static directory to serve :-
app.use(express.static(publicdirpath))
//dynamic directory
app.get('',(req,res)=>{
    res.render('index',{
        name:"Abhishek",
        place:"Uttarakhand,India"
    });
})
app.get("/about",(req,res)=>{
    res.render("about",{
        name:"Abhishek",
        place:"Sati"
    });
})
app.get("/help",(req,res)=>{
    res.render("help",{
        name:"Abhishek",
        place:"Sati"
    });
})
app.get("/help/*",(req,res)=>{
    res.render("in404",{
        error:"HELP",
        page:"PAGE NOT FOUND !"
    })

})
app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send("Plesase ! Enter an Address");
    }
    geocode(req.query.address,(error,data)=>{
        if(error!==undefined){
            res.send({error:error});
        }
        else{
            //we cant send 2 responds thats instead  of sending res now we have sent them below
            // res.send({
            //     latitude:data[0],
            //     longitude:data[1],
            //     placename:data[2]
            // })
            forecast(data[0],data[1],(error,result)=>{
                if(error){
                   return res.send({error:error});
                }
                else{
                    res.send({
                        Current_Time:result[0],
                        Current_Temp:result[1],
                        latitude:data[0],
                        longitude:data[1],
                        Location:data[2]
                    })
                }
            })
        }
    })
    // res.send({
    //     location:req.query.address,
    //     forecast:"it is raining"
    // })
    })
app.get("/products",(req,res)=>{
    //console.log(req.query)//it is used to check the queries which are requested by the user
    if(!req.query.search)
    {
       return res.send("Error ! Serach is not defined");
    }
    res.send({
        product:[]
    })
})    
app.get("*",(req,res)=>{
    res.render("404",{
        error:"404 ERROR",
        page:"! PAGE NOT FOUND"
    });
})

// app.get("/",(req,res)=>{
//     res.send("<h1>hello NodeJS</h1>")
// });
// app.get("/help",(req,res)=>{
//     res.send([{
//         name:"abhiishek",
//         course:"btech"
//     },
// {
//     name:"andrew",
//     course:"mtech"
// }]);
// })

// app.get("/about",(req,res)=>{
//     res.send({
//         name:"abhishek",
//         age:21
//     })
// });
// app.get("/weather",(req,res)=>{
//     res.send({
//         forecast:50,
//         locatiion:"philadelphia"
//     });
// })
app.listen(port,()=>{
    console.log(`Server is running at Port :- ${port}`);
});