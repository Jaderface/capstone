$.getJSON('./data.json', function(products) {

 console.log(products)
 const container = $("#container")
 const productsarray =[]

 $.each(products,function(key,product){
     productsarray.push(
        `
        <div class="product">
            <h3>${product.title}</h3>
            <img src="${product.image}"/>
            <p>${product.description}</p>
            <li>${"$"+product.price}</li>
           <button>Buy</button>
        </div>

        `    
     )
 })
 container.append(productsarray) 
})