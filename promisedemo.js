function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve();
          console.log("register here");

          })
        })
    }

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log("login here");
        })
    })
}

function displayData(){
    return new Promise((resolve,reject)=>{

    })
}
// register().then(login)
//     .then(getData)
//     .then(dispalyData)
//     .catch(err)=>{
//         console.log("error", err);
//     })
function test(){
    try{
        await register();
        await login();
        await getData();
        await displayData();
    }
    catch(err){
        console.log("error",err);
    }

}
test();
console.log("call another app");