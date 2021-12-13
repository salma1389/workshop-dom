// console.log(document)

const btnAddTag=document.getElementsByClassName("plus")
// console.log(btnAddTag)
var checkTag=document.querySelectorAll(".check")
// console.log(checkTag)
var btndecTag=document.getElementsByClassName("minus")
// console.log(checkTag)
var btndelTag=document.getElementsByClassName("delete")
// console.log(btndelTag)
var btnlikeTag=document.getElementsByClassName("like")
// console.log(btnlikeTag)


for(var i=0;i<btnAddTag.length;i++)
{
    btnAddTag[i].addEventListener("click",increment)
    checkTag[i].addEventListener("click",totalprice)
    btndecTag[i].addEventListener("click",decrement)
    btndelTag[i].addEventListener("click",deleted)
    btnlikeTag[i].addEventListener("click",liked)
}

function increment(event){
   var btnPlus=event.target
//    console.log(btnPlus)
   var divElt=btnPlus.parentElement
// console.log(divElt)
var quantitytag=divElt.querySelector("p");
// console.log(quantitytag)
var quantityValue=Number(quantitytag.innerHTML);
// console.log(typeof(quantityValue))
quantityValue++
quantitytag.innerHTML=quantityValue
var trElt=divElt.parentElement.parentElement
// console.log(trElt)
var priceTag=trElt.querySelector(".price");
// console.log(priceTag)
var priceValue=Number(priceTag.innerHTML)
// console.log(priceValue)
var unitpriceValue=Number(trElt.querySelector(".unitPrice").innerHTML)
// console.log(unitpriceValue)
priceValue=quantityValue*unitpriceValue
priceTag.innerHTML=priceValue
//  console.log(priceValue)
}

function totalprice (event){
   var checkTag=event.target
   //  console.log(checkTag)
   var btnPlus=checkTag.parentElement.parentElement.querySelector(".plus")
   var btnmoins=checkTag.parentElement.parentElement.querySelector(".minus")
   var priceValue=Number(checkTag.parentElement.parentElement.querySelector(".price").innerHTML)
   // console.log(priceValue)
   var TotalTag=document.getElementById("total")
   var TotalValue=Number(TotalTag.innerHTML)
   // console.log(TotalValue)
   if (checkTag.checked===true)
   {
      TotalValue+=priceValue;
      btnPlus.setAttribute("disabled",true);
      btnmoins.setAttribute("disabled",true);
   }
   else{
      TotalValue-=priceValue;
      btnPlus.removeAttribute("disabled")
      btnmoins.removeAttribute("disabled")
   }
   TotalTag.innerHTML=TotalValue;
    }
    

function decrement(event){
   btnmoins=event.target
// console.log(btnmoins)
   var divElt=btnmoins.parentElement
   // console.log(divElt)
   var quantitytag=divElt.querySelector("p");
// console.log(quantitytag)
var quantityValue=Number(quantitytag.innerHTML);
// console.log(typeof(quantityValue))
if (quantityValue>0){
   quantityValue--
}
quantitytag.innerHTML=quantityValue
var trElt=divElt.parentElement.parentElement
// console.log(trElt)
var priceTag=trElt.querySelector(".price");
// console.log(priceTag)
var priceValue=Number(priceTag.innerHTML)
// console.log(priceValue)
var unitpriceValue=Number(trElt.querySelector(".unitPrice").innerHTML)
// console.log(unitpriceValue)
priceValue=quantityValue*unitpriceValue
priceTag.innerHTML=priceValue
//  console.log(priceValue)

}

function deleted(event){
   var delTag=event.target
   var divElt=delTag.parentElement
   console.log(divElt)
   var trElt=divElt.parentElement.parentElement.parentElement;
   trElt.remove()
}

// function liked(event){


// }

function liked(event){
   var likelTag=event.target
   likelTag.classList.toggle("toggle");
 }