/**
 * Created by zhangpei on 16/8/4.
 */
var superTest = require("supertest");
let app = require("../src/server/shell");  //必须暴露服务器的app ,因此不需要开启让服务器就可以测试,传入APP
let request = superTest(app);

describe("get / body", function () {
  it("should get a parameter from body", function (done) {
    request
      .get("/body")       //这里只需要一个路由而不是地址
      .send({name: "zhangpei1"})
      .type("form")
      .expect(200, "hello1zhangpei1")
      .end((err, res)=> {
        if (err) {
          done.fail(err);
        } else {
          done()
        }
      })
  })
});

describe("post / query", function () {
  it("should get a parameter from query", function (done) {
    request
      .post("/query")
      .query({name: "zhangpei1"})
      .type("form")
      .expect(200, "hello2zhangpei1")
      .end((err, res)=> {
        if (err) {
          done.fail(err);
        } else {
          done()
        }
      })
  })
});

describe("post / param", function () {
  it("should get a parameter from param", function (done) {
    request
      .post("/param/zhangpei")
      .expect(200, "hello3zhangpei")
      .end((err, res)=> {
        if (err) {
          done.fail(err);
        } else {
          done()
        }
      })
  })
});

describe("post / postBody", function () {
  it("should get a parameter from postBody", function (done) {
    request
      .post("/postBody")
      .type("form")
      .send({name: "zhangpei"})
      .expect(200, "hello4zhangpei")
      .end((err, res)=> {
        if (err) {
          done.fail(err);
        } else {
          done()
        }
      })
  })
});

// describe("post / get",function () {
//   beforeEach(()=>{
//     let header = {name:"zhangpei"}
//   });
//   it("should get a parameter from get",function (done) {
//     request
//       .post("/get")
//       .expect(200,"hello5zhangpei")
//       .end((err,res)=>{
//         if(err){
//           done.fail(err);
//         } else {
//           done()
//         }
//       })
//   })
// });

describe("post / path", function () {
  it("should get a parameter from path", function (done) {
    request
      .get("/path?name=zhangpei")
      .expect(200, "hello6zhangpei")
      .end((err, res)=> {
        if (err) {
          done.fail(err);
        } else {
          done()
        }
      })
  })
});