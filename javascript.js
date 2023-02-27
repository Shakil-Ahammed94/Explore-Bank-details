
document.getElementById('btn').addEventListener('click',function(){
    const emailfieldinput=document.getElementById("emailfield");
    const emailvalue=emailfieldinput.value;
    

    const passwordfieldinput=document.getElementById("passwordfield");
    const passwordvalue=passwordfieldinput.value;

    if(emailvalue==='shakil@gmail.com' && passwordvalue==='secret'){
        window.location.href = 'http://127.0.0.1:5500/newfile.html';
    }
    else{
        console.log("please enter valid email and password")
    }
    
})
