// const http=require('http');
// const myserver=http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.end('welcome to home page');
//     }
//     else if(req.url=='/about'){
//         res.end(`<h1>abes engineering college</h1>
//             <img src="https://unsplash.com/photos/a-dark-grey-sports-car-with-red-wheels-hSCrpBasAss">
//         `);
//     }
//     else if(req.url=='/contact us'){
//         res.end('1234567890');
//     }
//     else if(req.url=='/class'){
//         res.end('I.T-A');
//     }
//     else{
//         res.end('404 page not found');
//     }
// });
// myserver.listen(8000,(req,res)=>{
//     console.log("server is running on port 8000");
// })

// constfs=require('fs');
// fs.writeFileSync("./it-a.txt","we are student of i.t-a class");
// fs.writeFileSync("./abes.txt","we are student of abes");


// const fs=require('fs');
// fs.writeFile("./it-b.txt","we are student of  it-a class",()=>{});
// fr.readFile("./it-b.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }
//     else{
//         console.log(result);
//     }
// })

// fs.appendFileSync("./it-b.txt",'and i am sad');
// fs.appendFile("./it-b.txt",'hello hii bye ')



const fs=require('fs');
fs.writeFileSync("./a1.txt","we are student of i.t-a class");
fs.cpSync("./a1.txt","./b1.txt");
fs.unlinkSync("./a1.txt");



