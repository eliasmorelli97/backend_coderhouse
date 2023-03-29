class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct = (
        title, description, price, thumbnail, code, stock, id
    ) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if (
            title === '' ||
            description === '' ||
            price === '' ||
            thumbnail === '' ||
            code === '' ||
            stock === ''
        ) {
            console.log('Error: hay campos sin completar');
            return;
        }

        const productIndex = this.products.findIndex(product => product.code === code)

        if (productIndex !== -1) {
            console.log('Error: ya existe un producto con ese código')
            return;
        }

        if (this.products.length === 0){
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
    }

    getProducts = () => {
        return this.products;
    }

    getProductsById = (id) => {
        const productIndex = this.products.findIndex(product => product.id === id)

        if (productIndex === -1) {
            console.log('Error: no existe un producto con ese ID')
            return;
        }

        console.log(this.products[productIndex]);
    }
}

const productsHandler = new ProductManager();

console.log(productsHandler.getProducts());

productsHandler.addProduct('Producto 1', 'Este es el producto 1', 100, 'Sin imagen', 'abc123', 25);
productsHandler.addProduct('Producto 2', 'Este es el producto 2', 200, 'Sin imagen', 'abc456', 50);
productsHandler.addProduct('Producto 3', 'Este es el producto 3', 300, 'Sin imagen', 'abc789', 75);

console.log(productsHandler.getProducts());

productsHandler.getProductsById(2);