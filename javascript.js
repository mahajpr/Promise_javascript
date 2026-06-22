let username = prompt("enter username:");
let password = prompt("enter the password");

let login = new Promise((resolve,reject)=>{
    if(username ==="admin" && password ==="12345"){
        resolve("login success");
    }
    else{
        reject("login failed");
    }
});

login
.then(result =>console.log(result))
.catch(error =>console.log(error));