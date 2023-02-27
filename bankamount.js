document.getElementById('btn').addEventListener('click',function(){
    
    const depositone=document.getElementById('depositamount');
    const newdepositone=depositone.value;
    const wanteddepositamount=parseFloat(newdepositone);

    
    
    const depositinput=document.getElementById('three');
    const newdepositinput=depositinput.innerText;

    
    const previousdepoamount=parseFloat(newdepositinput);
   
    

const altogeather=previousdepoamount+wanteddepositamount;

depositinput.innerText=altogeather;
    
    depositone.value='';





    //total net amount section

    const net=document.getElementById("capital");
    const netvalue=net.innerText;
    const netvalueUse=parseFloat(netvalue);

    

    const sumupvalue=netvalueUse+wanteddepositamount;
    console.log(sumupvalue);
    net.innerText=sumupvalue;
    
})