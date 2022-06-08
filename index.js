require('dotenv').config()
const http=require('http')
const fs=require('fs')
const port=process.env.PORT || 5000
const host=process.env.HOST_NAME
const home=fs.readFileSync('pages/home.html')
const about=fs.readFileSync('pages/about.html')
const server=http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url==='/home'){
       // res.end('Home Page ')
       res.end(home)
    }else if(req.url==='/about'){
        //res.end('About Page')
        res.end(about)
    }
    else{
        res.writeHead(400)
        res.end("Page Not found..")
    }
    
})
server.listen(port,()=>{
    console.log(`Node js server is running at http://${host}:${port}`)
})