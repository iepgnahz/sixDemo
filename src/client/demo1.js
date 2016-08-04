/**
 * Created by zhangpei on 16/8/4.
 */
var request = require("superagent");
request
  .get("http://127.0.0.1:2000/body")
  .send({name:"zhangpei"})
  .type("form")
  .end((err,res)=>{
    console.log(res.text)
  });
