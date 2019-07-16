//https://medium.com/@appear.ko/javascript-async-to-sync-157c57208598
function callback1(){
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
}

function callback2(){
    function step1(callback){
        setTimeout(function(){
            console.log("step1 run....");
        }, 2000)
    }
  
    function step2(){
        setTimeout(function(){
            console.log("step2 run....");
        }, 1000)
    }
    step1();
    step2();
}

function callback3(){
    function step1(callback){
        setTimeout(function(){
            console.log("step1 run....");
            callback()
        },2000)
    }

    function step2(callback){
        setTimeout(function(){
            console.log("step2 run....");
        },1000)
    }

    step1(step2); // 표현방법 1

    // step1(function(){ // 표현방법 2
    //     setTimeout(function(){
    //         console.log("step2 run....");
    //     },1000)
    // })s
}

callback3();
