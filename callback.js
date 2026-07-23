function register(cb){
    setTimeout(()=>{
    console.log("register here");
    cb();

    },6000)
}
function login(cb){
    setTimeout(()=>{
        console.log("login here"); 
        cb();

    },8000)

}
function getData(cb){
    setTimeout(()=>{
      console.log("get data")
      cb();

    },6000)
    console.log("get data here");
}
function displayData(){
    setTimeout(()=>{
        console.log("display data here");
    },1000)
    
}

// callback hell
register(()=>{
    login(()=>{
        getData(()=>{
            displayData()
        })
    })
})

console.log("call another App");