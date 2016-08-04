/**
 * Created by zhangpei on 16/8/4.
 */
var request = require("superagent");
request
  .post("http://127.0.0.1:2000/param/zhangpei")
  .send({name:"mary"})
  .type("form")
  .end((err,res)=>{
    console.log(res.text)
  });