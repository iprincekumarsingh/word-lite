
               function alertm (msg,timet){ 
                    document.getElementById("nav").insertAdjacentHTML("afterend",`<div id="alertmsg" class="alert alert-success" role="alert">${msg}</div>`)
               
                    setTimeout(() => {document.getElementById("alertmsg").remove()}, `${timet}`);}

               // function notifymsg() {
               //      document.getElementById("textareabox").insertAdjacentHTML("afterend",`   <div id="n-msg">
               //      <ul>
               //           <li>The button will be visible after u enter any text</li>
               //           <li></li>
               //           <li></li>
               //           <li></li>
               //           <li></li>
               //      </ul>
               // </div>`)

               // }
               // notifymsg()

               var enteredValue =document.getElementById("ptext")
               var userPreviewText =document.getElementById("previewtext")
               var activated_btn_Upper=  document.getElementById("activated_btn_Upper")
               let activated_btn_Lower =document.getElementById("activated_btn_Lower")
               var activated_btn_Bold =document.getElementById("activated_btn_Bold")
               var activated_btn_Italic = document.getElementById("activated_btn_Italic")
               var  activate_btn_clearText =  document.getElementById("activate_btn_clearText")
               var hidePreview = document.getElementById("hide")


               activate_btn_clearText.classList.add("btn-disbaled");
               activated_btn_Upper.classList.add("btn-disbaled");
               activated_btn_Lower.classList.add("btn-disbaled");
               activated_btn_Bold.classList.add("btn-disbaled");
               activated_btn_Italic.classList.add("btn-disbaled"); 
               hidePreview.classList.add("btn-disbaled")
               userPreviewText.innerText="Text Box is empty"
              
              


               function preview() {
               var enteredTextByTheUser = document.getElementById("ptext").value
               var preview_of_Entered_Text = document.getElementById("previewtext")
               var text_Length =enteredTextByTheUser.length;
               document.getElementById("counttext").innerText=text_Length+" Characters";

               if (enteredTextByTheUser === "" ) {
                    activated_btn_Upper.classList.add("btn-disbaled");
               activate_btn_clearText.classList.add("btn-disbaled");
               activated_btn_Upper.classList.add("btn-disbaled");
               activated_btn_Lower.classList.add("btn-disbaled");
               activated_btn_Bold.classList.add("btn-disbaled");
               activated_btn_Italic.classList.add("btn-disbaled"); 
               preview_of_Entered_Text.innerText="Text Box is empty" 
               // hidePreview.classList.add("btn-disbaled")
  
               }
               else{
                    preview_of_Entered_Text.innerText = enteredTextByTheUser
          
                    activate_btn_clearText.classList.remove("btn-disbaled");
                    activated_btn_Upper.classList.remove("btn-disbaled");
                    activated_btn_Lower.classList.remove("btn-disbaled");
                    hidePreview.classList.remove("btn-disbaled")
                    activated_btn_Bold.classList.remove("btn-disbaled");
                    activated_btn_Italic.classList.remove("btn-disbaled");
                    document.getElementById("n-msg").remove()
               }

               }
               function converToUpperCase() {
                   
                  
if (document.getElementById("activated_btn_Lower").classList.contains("active-btn") === true ) {
     
     alert("Close Lower Case")
}
else{
     enteredValue.classList.toggle("upperCase")
     userPreviewText.classList.toggle("upperCase")
     // alert("Text Converted into UpperCase",2000)
     activated_btn_Upper.classList.toggle("active-btn")

     if (document.getElementById("activated_btn_Upper").innerText ==="UpperCase") {
          document.getElementById("activated_btn_Upper").innerText ="Active Upper-Case"
     }
     else{
          document.getElementById("activated_btn_Upper").innerText ="UpperCase"

     }
}

               }
     

               
               function clr() {
               enteredValue.value = ""
               userPreviewText.innerText = ""
               document.getElementById("counttext").innerText=""+0+" Characters"
               alert("Text Cleared",2000)
               }

               // Dark mode function
               function darkmode(){
                    document.body.style.removeProperty("background-color")

               document.body.classList.toggle("dark-mode")
               document.getElementById("nav").classList.toggle("nav-dark")
               alert("Theme enabled",2000)
               }

               function bold(){

               enteredValue.classList.toggle("boldfont")
               userPreviewText.classList.toggle("boldfont")  
               activated_btn_Bold.classList.toggle("active-btn")
               if (document.getElementById("activated_btn_Bold").innerText ==="Bold") {
                    document.getElementById("activated_btn_Bold").innerText ="Active Bold"
               }
               else{
                    document.getElementById("activated_btn_Bold").innerText ="Bold"

               }
          
             

               }

               function italic(){
               enteredValue.classList.toggle("italicFont")
               userPreviewText.classList.toggle("italicFont")
               activated_btn_Italic.classList.toggle("active-btn")
               if (document.getElementById("activated_btn_Italic").innerText ==="Italic") {
                    document.getElementById("activated_btn_Italic").innerText ="Active Italic"
               }
               else{
                    document.getElementById("activated_btn_Italic").innerText ="Italic"

               }
               }

               function lCase(){
                    if (document.getElementById("activated_btn_Upper").classList.contains("active-btn") === true ) {
     alert("Close Upper Case ")
                    }
                    else{
                         enteredValue.classList.toggle("lowerCase")
                         userPreviewText.classList.toggle("lowerCase")
                         activated_btn_Lower.classList.toggle("active-btn")
                         if (document.getElementById("activated_btn_Lower").innerText ==="Lower Case") {
                              document.getElementById("activated_btn_Lower").innerText ="Active Lower Case"
                         }
                         else{
                              document.getElementById("activated_btn_Lower").innerText ="Lower Case"
          
                         }
                    }    
               // alert("Text Converted into lower Case",2000)
               }

               function bluee(){
                    document.body.style.removeProperty("background-color")
                  console.log("color");
                  document.body.style.backgroundColor="blue"
                  document.body.style.color="white"
                  document.getElementById("ptext").style.color="white"
                  document.getElementById("ptext").style.backgroundColor="transparent"
               }
               function white(){
                    document.body.style.removeProperty("background-color")
                    document.body.style.backgroundColor="transparent"
                    document.body.style.color="black"
                    document.getElementById("ptext").style.color="black"
               }
               function yellow(){
                    document.body.style.removeProperty("background-color")
                    document.body.style.backgroundColor="yellow"
                    document.body.style.color="black"
                    document.getElementById("ptext").style.color="black"
               }
               function black(){
                    document.body.style.removeProperty("background-color")
                    document.body.style.backgroundColor="#242B2E"
                    document.body.style.color="white"
                    document.getElementById("ptext").style.color="black"
                    
               }
               function pink(){
                    document.body.style.removeProperty("background-color")
                    document.body.style.backgroundColor="pink"
                    document.body.style.color="black"
                    document.getElementById("ptext").style.color="black"
                    document.getElementById("ptext").style.backgroundColor="transparent"

 
               }
               function about(){
                    document.getElementById("cc").style.display="none"
                    
                    document.getElementById("main").style.display="none"
                    document.getElementById("switch_button").style.display="none"

                    document.getElementById("about-main").style.display="block"
               }
               function home(){
                    document.getElementById("about-main").style.display="none"
                    document.getElementById("cc").style.display="none"

                    document.getElementById("switch_button").style.display="block"

                    document.getElementById("main").style.display="block"
               }
               function cc(){
                    document.getElementById("main").style.display="none"

                    document.getElementById("about-main").style.display="none"
                    document.getElementById("main").style.display="none"

                    document.getElementById("cc").style.display="none"
               }