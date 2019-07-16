//https://medium.com/@appear.ko/javascript-async-to-sync-157c57208598
function promise1(){
    function foo(){
        return new Promise(function(resolve, reject){
            try{
                resolve("i am Promise")
            } catch(error){
                reject(error)
            }
        })
    }
    
    foo().then(function(args){
        console.log(args)
    })
}


function promise2(){
    var promise = new Promise(function(resolve, reject) {
        resolve(1);
    });
    
    promise.then(function(val){
        console.log(val);
        return val + 2;
    }).then(function(val){
        console.log(val);
    })
}

function promise3(){
    function a(){
        console.log("a run....");
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve(' i am A');
            }, 2000)
        })
    }
    
    function b(str){
        console.log("b run....");
        setTimeout(function(){
            console.log("넘겨받은값 : ", str)
        }, 1000)
    }
    a().then(function(str){
        b(str);
    })
}
promise3();
