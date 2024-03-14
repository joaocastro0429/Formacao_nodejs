const express = require ('express')


const app=express()

app.use(express.json())

app.get("/courses",(request,response)=>{
    const query=request.query
    // query params 
    console.log(query)
    return response.json(["course1","course2","course3"])
})

app.post("/courses",(request,response)=>{
    const body=request.body
    console.log(body)
    return response.json(["course1","course2","course3","course04"])
})

app.put("/courses/:id",(request,response)=>{
    const params=request.params.id
    // routes params
    console.log(params)
    return response.json(["course1","course2","course3","course04"])


})

app.patch("/courses/:id",(request,response)=>{
    return response.json(["course1","course2","course3","course04"])


})
app.delete("/courses/:id",(request,response)=>{
    return response.json(["course1","course2","course3",])


})



app.listen(3333)