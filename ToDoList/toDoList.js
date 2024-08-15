
document.getElementById("addButton").addEventListener("click", addElementToList)

function addElementToList(){
    debugger;
    var product = document.createElement("li");
    var newProductText = document.getElementById("mandado").value;

    const textnode = document.createTextNode(newProductText);
    product.appendChild(textnode);

    document.getElementById("myList").appendChild(product);

    document.getElementById("mandado").value = "";
}


