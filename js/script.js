const addButton =document.getElementsByClassName("add_button")
const allItemButton =document.querySelector("button")
const test = document.getElementById("test")
const demo=document.getElementById("demo")
const querySelectorExample = document.querySelectorAll("p.pClass")
const price =document.querySelectorAll("p.price")
const container =document.getElementsByClassName("container")
const shoppingCart = document.getElementById("shopping-cart")
listPrice = []
//. class ==> name
//Document
//************************************************************** */
// document.getElementById(id)	Find an element by element id
// document.getElementsByTagName(name)	Find elements by tag name
// document.getElementsByClassName(name)

//property html 
// element.innerHTML =  new html content	Change the inner HTML of an element
// element.attribute = new value	Change the attribute value of an HTML element
// element.style.property = new style	Change the style of an HTML element
//################################################
//element.setAttribute(attribute, value)	Change the attribute value of an HTML element


//Adding and Deleting Elements

// document.createElement(element)	Create an HTML element
// document.removeChild(element)	Remove an HTML element
// document.appendChild(element)	Add an HTML element
// document.replaceChild(new, old)	Replace an HTML element
// document.write(text)	Write into the HTML output stream
/*************************************************************** */


//##document.getElementsByTagName(name)
// p tag name
//<p id="demo"></p>

//document.getElementsByClassName(name)
//<p class="intro">This example demonstrates the <b>getElementsByClassName</b> method.</p>

// //document.querySelectorAll("p.intro")
// <p class="intro">Hello World!.</p>
// <p class="intro">This example demonstrates the <b>querySelectorAll</b> method.</p>
//const x = document.querySelectorAll("p.intro");


//demo.innerHTML="The text from the intro paragraf is <b>Bold</b> "+querySelectorExample[0].innerHTML+" "+querySelectorExample[1].innerHTML;


//hatalı hepsine id verince calısmıyor 
//class vermek gerekli
// function buttonClick(id)
// {

//     const add= addButton.innerHTML="Eklendi"
//     if(add.innerHTML="Eklendi")
//     {
//         addButton.style.cssText="color:green"

//     }

// }


let testPrint=()=>
{
    test.document.innerHTML="writter"
}

let testPrintClick=()=>
{
    test.style.cssText="color:green"
}



// Changing html style css
//demo.style.color="green"


let textClickChangeColor=()=>
{
    demo.style.color="red"
}


let addButtonClick=(click)=>
{
    click.style.backgroundColor = 'green';
    click.style.color = 'white';
    click.innerHTML="Eklendi"
    listPrice.push(23)
    

    
    
}

let getPrice =()=>
{
    price.forEach(x =>
        console.log(x.innerHTML)
        )
}
getPrice();
let getAllItemPrice=()=>
{
    price.forEach(e =>e.getElementsByClassName("price").item)

}




// [...document.querySelectorAll('.list li')]
//   .forEach(e => document
//     .getElementById(e.price)
//     .querySelector('ul')
//     .innerHTML += e.outerHTML);

{/* <div class="card">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/640px-Bright_red_tomato_and_cross_section02.jpg" alt="Denim Jeans" style="width:100%">
<h1>Domates</h1>
<p class="price">₺19.99</p>
<p><button class="add_button" onclick="addButtonClick(this)" >Sepete Ekle</button></p>
</div> */}



