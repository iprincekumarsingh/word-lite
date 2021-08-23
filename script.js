     function converToUpperCase() {
     document.getElementById("ptext").classList.toggle("upperCase")
   

     document.getElementById("previewtext").classList.toggle("upperCase")
     document.getElementById("activated_btn_Upper").classList.toggle("active-btn")

     // var ccc = document.getElementById("ptext").value = c
     // console.log(ccc);
     }
     function preview() {
     var x = document.getElementById("ptext").value
     var y = document.getElementById("previewtext")
     y.innerText = x
     var cv =x.length;
     console.log(cv);
     document.getElementById("counttext").innerText=cv+" letter";
     }

     var isEmpty = document.getElementById("ptext").value
     if (isEmpty === "") {
     document.getElementById("previewtext").innerText = "Enter a word or Text to be fiiled "
     }

     var checklength = document.getElementById("counttext").value
     if(checklength ===""){
          document.getElementById("counttext").value="You haven`t enter a word"
     }
     function clr() {
     document.getElementById("ptext").value = ""
     document.getElementById("previewtext").innerText = ""
     document.getElementById("counttext").innerText=""+0+" Word"
     }
     function darkmode(){
          document.body.classList.toggle("dark-mode")
          document.getElementById("nav").classList.toggle("nav-dark")
     }
     function bold(){
          var boldtext = document.getElementById("ptext")
          boldtext.classList.toggle("boldfont")
          document.getElementById("previewtext").classList.toggle("boldfont")
          document.getElementById("activated_btn_Bold").classList.toggle("active-btn")

     }
     function italic(){
          document.getElementById("ptext").classList.toggle("italicFont")
          document.getElementById("previewtext").classList.toggle("italicFont")
          document.getElementById("activated_btn_Italic").classList.toggle("active-btn")

          activated_btn_Italic

     }
     function lCase(){
          document.getElementById("ptext").classList.toggle("lowerCase")
          document.getElementById("previewtext").classList.toggle("lowerCase")
          document.getElementById("activated_btn_Lower").classList.toggle("active-btn")
          document.getElementById("activated_btn_Lower").innerText="Active"
          
          // document.getElementById("previewtext").classList.toggle("lowerCase")
     }