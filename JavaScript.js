 





function button() {
  let info_value = document.getElementById("info");
   let checkemail = document.getElementById("checkemail");

 var word="@"
 var word_info=info_value.value
 
var place = word_info.indexOf(word);
 

   if (place !== -1) {
     alert( "Your Email is "+word_info+"Please confirm your email" )
      

            checkemail.innerHTML="Your email is correct."
 checkemail.style.color="green"
checkemail.style.fontSize="15px"
info_value.style.border="2px solid green"
info_value.style.fontFamily=" Open Sans, sans-serif";

   }
   else{

      checkemail.innerHTML="Check your email please."
checkemail.style.color="hsl(0, 100%, 63%)"
checkemail.style.fontSize="15px"
info_value.style.border="2px solid hsl(0, 100%, 63%)"
info_value.style.fontFamily=" Open Sans, sans-serif";
   }
  

   



   





}  