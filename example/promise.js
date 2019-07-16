//https://medium.com/@appear.ko/javascript-async-to-sync-157c57208598
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


var promise = new promise(function(resolve, reject){
    resolve(1);
});

promise.then(function(val){
    console.log(val);
    return val + 2;
}).then(function(val){
    console.log(val);
})