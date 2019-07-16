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