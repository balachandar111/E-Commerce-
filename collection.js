var container=document.getElementById("product-item")
var search=document.getElementById("inputval")
var productlist=container.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1){
        var productvalue=productlist[count].querySelector("p").textContent
        if(productvalue.toUpperCase().indexOf(enteredvalue)< 0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})
