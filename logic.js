var char = document.querySelector("#char")
var word = document.querySelector("#word")
var textarea = document.querySelector("#textarea")
var main = document.querySelector(".textcontain")

 
main.addEventListener("onclick",function(){
 main.style.color = "#1a3d3c"
})


 char.addEventListener("click",function(){
       let text = textarea.value.trim().split("").filter(str => str.trim() !== '')
      //  console.log(text)

       let count = text.length

       console.log(count)
        
       char.innerText = `Character's = ${count}`

      })

  
      
      word.addEventListener("click",function(){
         let textget = textarea.value.trim().split(' ').filter(str => str.trim() !== '')

         // console.log(textget)

         let countw = textget.length

         // console.log(countw)

         word.innerText = `Word's = ${countw}`
      })
      
     

   