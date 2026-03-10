const express=require("express")
const { v4: uuidv4 } = require("uuid")
const app=express()
app.use(express.json())

let events=[]

app.get("/health",(req,res)=>{
res.json({
status:"ok",
service:"skynet-ops-audit-service",
environment:"dev",
timestamp:new Date()
})
})

app.post("/events",(req,res)=>{

const event=req.body

if(!event.tenantId || !event.message){
return res.status(400).json({error:"invalid payload"})
}

event.eventId="evt_"+uuidv4()
event.storedAt=new Date()

events.push(event)

res.status(201).json({
success:true,
eventId:event.eventId,
storedAt:event.storedAt
})

})

app.get("/events",(req,res)=>{
res.json({items:events})
})

app.listen(3000,()=>{
console.log("server running on port 3000")
})
