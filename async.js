function register(){
    setTimeout(()=>{
    console.log("register here");
    },6000)
}
function login(){
    waitforinput(8000);
    console.log("login here");
}
function getData(){
    setTimeout(()=>{
      console.log("get data")
    },6000)
    console.log("get data here");
}
function displayData(){
    console.log("display data here");
}


register();
login();
getData();
displayData();
console.log("call another App");