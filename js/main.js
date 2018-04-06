

// #6 Add to the constructor function, create a method that multiplies two numbers and returns the product.
function Cars(image, make, model, price, link) {
  this.image = image;
  this.make  = make;
  this.model = model;
  this.price = price;
  this.salesTax = function() {
    return this.price * 0.09;
  };
  this.link = link;
}
var conObj1 = new Cars("img/fiat500c.jpg", "fiat", "500c", 16490, "https://www.fiat.com/");
var conObj2 = new Cars("img/fiat500l.jpg", "ford", "500l", 20995, "https://www.ford.com/");
var conObj3 = new Cars("img/fiat500x.jpg", "chevy", "500x", 19995, "http://www.chevrolet.com/");

// #7 Add each constructor object to an array.
var carsArray = [conObj1, conObj2, conObj3];

// #8 Loop through the array of objects
for (var i = 0; i < carsArray.length; i++) {
  // for each one create an element to add the content to (one needs to be an image element).
  var newDiv  = document.createElement("div")
  var newImg  = document.createElement("img");
  var newH1   = document.createElement("h1");
  var newH2   = document.createElement("h2");
  var newP    = document.createElement("p");
  var newSpan = document.createElement("span");
  var a       = document.createElement("a")
                 a.setAttribute("href", newLink)
                 a.setAttribute("target", "_blank")

  console.log(newDiv, newImg, newH1, newH2, newP, newSpan);

  // #9 Still in the loop, create text nodes for each piece of content
  var newH1Text   = document.createTextNode(carsArray[i].make);
  var newH2Text   = document.createTextNode(carsArray[i].model);
  var newLink = carsArray[i].link;
  var newPText    = document.createTextNode("price: " + carsArray[i].price);
  var newSpanText = document.createTextNode("sales tax: " + carsArray[i].salesTax());

   

  console.log(newH1Text, newH2Text, newPText, newSpanText);

  // add those to the elements you created.

  a.appendChild(newH1)
  newH1.appendChild(newH1Text);
  newH2.appendChild(newH2Text);
  newP.appendChild(newPText);
  newSpan.appendChild(newSpanText);


  // #10 Still in the loop, update the source and alt attributes of the image.
  newImg.src = carsArray[i].image;
  newImg.alt = carsArray[i].make + " " + carsArray[i].model;

  // #12 Add the elements to the HTML so a user can view them.
  newDiv.appendChild(newImg);
  newDiv.appendChild(a);
  newDiv.appendChild(newH2);
  newDiv.appendChild(newP);
  newDiv.appendChild(newSpan);

  document.getElementById("display").appendChild(newDiv)
}
