/**
 * Created by zhangpei on 16/8/4.
 */
var request = require("superagent");

request
  .get("http://127.0.0.1:2000/path?name=xiaoming")
  .type("form")
  .end((err, res)=> {
    if (res.ok) {
      console.log(res.text)
    } else {
      console.log(`error!!!${res.text}`)
    }
  });