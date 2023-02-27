document.getElementById('btn-one').addEventListener('click',function(){
    
    const withdrawidaccess=document.getElementById('withdrawamount');
    const withdrawidaccessvalue=withdrawidaccess.value;
    const wantedwithdrawamount=parseFloat(withdrawidaccessvalue);

    
    
    const withdrawtext=document.getElementById('four');
    const newdepositinput=withdrawtext.innerText;

    
    const previouswithdraw=parseFloat(newdepositinput);
   
    

const altogeather=previouswithdraw+wantedwithdrawamount;

     withdrawtext.innerText=altogeather;
    
      withdrawidaccess.value='';





    //total net amount section

    const net=document.getElementById("capital");
    const netvalue=net.innerText;
    const netvalueUse=parseFloat(netvalue);

    

    const sumupvalue=netvalueUse-wantedwithdrawamount;
    console.log(sumupvalue);
    net.innerText=sumupvalue;


    
})