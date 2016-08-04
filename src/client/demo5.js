// /**
//  * Created by zhangpei on 16/8/4.
//  */
//   var request = require("superagent");
// var  header = {
//   name:"bob"
// };
// request
//   .post("http://127.0.0.1:2000/get")
//   .type("form")
//   .end((err,res)=>{
//     if(res.ok) {
//       console.log(header.name)
//     } else {
//       console.log("error!!!"+res.text)
//     }
//   })