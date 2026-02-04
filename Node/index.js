const http=require('http');
const myserver=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('welcome to home page');
    }
    else if(req.url=='/about'){
        res.end(`<h1>abes engineering college</h1>
            <img src="https://unsplash.com/photos/a-dark-grey-sports-car-with-red-wheels-hSCrpBasAss">
        `);
    }
    else if(req.url=='/contact us'){
        res.end('1234567890');
    }
    else if(req.url=='/class'){
        res.end('I.T-A');
    }
    else{
        res.end('404 page not found');
    }
});
myserver.listen(8000,(req,res)=>{
    console.log("server is running on port 8000");
})