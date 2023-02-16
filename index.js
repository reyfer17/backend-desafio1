let products = [];

class ProductManager {
    constructor(title, description, price, thumbnail, code, stock){
        this.id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    getProducts(){
        console.log(products);
    }
    addProduct(product){
        let productArray = Object.values(product)
        let validateArray = productArray.filter(element => element === undefined)
        if(validateArray.length > 0)
        {
            return console.log(`El producto ingresado no se puede agregar. Falta completar informacion.`)
        }
        if (products.length == 0){
            product.id = 1;
            products.push (product);
        }else{
            let productDuplicate = products.find( prod => prod.code === product.code)
            if (!productDuplicate){
                product.id = products.length + 1
                products.push (product);
            }else{
                console.log(`Codigo ${product.code} repetido. Producto no ingresado.`)
            }
        }
    }
    getProductById(id){
        const productToFind = products.find( product => product.id == id )
        if(!productToFind){
            console.log(`No hay producto con id ${id}`);
        }else{
            console.log(productToFind);
        }
    }
}

const PRODUCT1 = new ProductManager("producto de prueba1","Este es un producto prueba",200,"sin imagen","abc123",25);
PRODUCT1.getProducts()//devuelve array vacio
const PRODUCT2 = new ProductManager("producto de prueba2","Este es un producto prueba2",500,"sin imagen","abc456",50);
const PRODUCT3 = new ProductManager("producto de prueba3","Este es un producto prueba3",1000,"sin imagen","abc789",100);
PRODUCT1.addProduct(PRODUCT1)//carga producto1
PRODUCT2.addProduct(PRODUCT2)//carga producto2
PRODUCT3.addProduct(PRODUCT3)//carga producto3
const PRODUCT4 = new ProductManager("producto de prueba4","Este es un producto prueba4",1000,"sin imagen","abc789",100);//repite codigo
const PRODUCT5 = new ProductManager("producto de prueba5","Este es un producto prueba5","sin imagen","abc000",200);//le falta un campo
PRODUCT4.addProduct(PRODUCT4)//devuelve codigo repetido, no cargado
PRODUCT4.addProduct(PRODUCT5)//devuelve falta cargar alguna informacion en el producto
PRODUCT1.getProducts()//devuelve los productos cargados correctamente
PRODUCT1.getProductById(2)//devuelve el producto de id=2