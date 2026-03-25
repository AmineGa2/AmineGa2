let products=[];

function addProduct(){

let name=document.getElementById("name").value;
let size=document.getElementById("size").value;
let color=document.getElementById("color").value;
let price=document.getElementById("price").value;
let quantity=document.getElementById("quantity").value;

let product={
name:name,
size:size,
color:color,
price:price,
quantity:quantity
};

products.push(product);

displayProducts();

}

function displayProducts(){

let table=document.getElementById("table");

table.innerHTML="";

products.forEach((p,i)=>{

table.innerHTML+=`

<tr>

<td>${p.name}</td>
<td>${p.size}</td>
<td>${p.color}</td>
<td>${p.price}</td>
<td>${p.quantity}</td>

<td>
<button onclick="deleteProduct(${i})">Supprimer</button>
</td>

</tr>

`;

});

}

function deleteProduct(i){

products.splice(i,1);

displayProducts();

}