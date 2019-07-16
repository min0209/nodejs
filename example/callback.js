function a(calllback){
    const whoami = "i am A"
    calllback(whoami)
  }
  
  function b(str){
    console.log("받은값 : ",str);
  }
  
  a(function(str){
    console.log("받은값 : ", str)
  })
  
  a(b)