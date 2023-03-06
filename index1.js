import ProductManager from "./ProductManager.js";

const product = new ProductManager();

const env = async () => {
   // let primerConsulta = await product.getproducts();
   //console.log(primerConsulta);

  const producto = {

        title:"huevo",
        description:"32 unidades",
        Price:10,
        thumbnail:"no podemos",
        code:"abc798",
        stock: 100

    };

    

    //let result = await product.addProduct(producto); // Agrega el primer producto
   // console.log(result);


   await product.updateProduct(1, 50, 'abc478' , "Fish", "salmon", 15, "no");

   //await product.deleteProduct(2);

   // await product.getproducts();
    
};


env();
