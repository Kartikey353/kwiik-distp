const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const email=document.getElementById("email");
const mobileNumber=document.getElementById("mobileNumber"); 
const password=document.getElementById("Password"); 
const confirmpass=document.getElementById("confirm");  
const f=/^[A-Za-z][A-Za-z0-9_]{2,29}$/;  
const m=/^(\+\d{1,3}[- ]?)?\d{10}$/; 
const pass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/;  
const form=document.getElementById("form"); 
document.getElementById("submitid").disabled = true; 
document.getElementById("submitid").classList.add('disable');
form.addEventListener('submit',(e)=>{    
   e.preventDefault();
if(checkInputs(firstName,f,'Name must contain only numbers and alphabet') &&
checkInputs(lastName,f,'Name must contain only numbers and alphabet') &&
checkInputs(mobileNumber,m,'not valid mobile number') &&
checkInputs(password,pass,'must contain at least one uppercase,lowercase,number,specialchracter,of length min 8 max 20') &&
checkEqual(confirmpass,password,'must be same as password'))
{
   document.getElementById("submitid").disabled = false; 
   document.getElementById("submitid").classList.remove('disable'); 
   console.log(true);
} 
}) 
function checkInputs(inp,test,message)
{  
   const res=inp.value;
   if(res===''){
    setErrorFor(inp,'feild required');  
    return false;
   }else if(!test.test(res)){
         setErrorFor(inp,message); 
         return false;
      } 
   else{
    setSuccessFor(inp," "); 
    return true;
   } 
}  
function checkEqual(input1,input2,message)
{
   const firstNamevalue=input1.value.trim();
   if(firstNamevalue===''){
    setErrorFor(input1,'feild required');  
    return false;
   }if(input1.value!==input2.value){
      setErrorFor(input1,message); 
      return false;
   }else{
      setSuccessFor(input1," "); 
      return true;
     }
}
function setErrorFor(input ,valueshown){
   const formcontrol=input.parentElement; 
   const small=formcontrol.querySelector('small'); 
   small.innerText=valueshown;
} 
function setSuccessFor(input,show)
{
   const formcontrol=input.parentElement; 
   const small=formcontrol.querySelector('small'); 
   small.innerText=show;
}