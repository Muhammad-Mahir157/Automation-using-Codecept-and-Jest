var supertest = require('supertest')
const request = supertest("http://localhost:3000/")
it("Testing Current User",async function(){
    
    const response = await  request.get('api/user/current').set("X-Metabase-Session","ac629326-ea77-4739-ae73-1c1b263e448c")
    expect(response.body.email).toEqual("hammadnhassan7799@gmail.com")
   
}) 

it("Testing Activity",async function(){
    
    const response = await  request.get('api/activity').set("X-Metabase-Session","ac629326-ea77-4739-ae73-1c1b263e448c")
    console.log("table id is "+response.body.table_id)
    expect(response.status).toEqual(200)
   
}) 
/*
it("Testing Question",async function(){
    
    const response = await   request.post('api/card').set("X-Metabase-Session","ac629326-ea77-4739-ae73-1c1b263e448c")
  
    expect(response.status).toEqual(200)
   
}) */

it("Testing Setting(admin email)",async function(){
    
    const response = await   request.get('api/setting/admin-email').set("X-Metabase-Session","ac629326-ea77-4739-ae73-1c1b263e448c")
  
    expect(response.body).toEqual("hammadnhassan7799@gmail.com")
   
}) 
