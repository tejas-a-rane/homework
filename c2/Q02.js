class Product{
    name
    productId
    price

    constructor(name,productId,price){
        this.name=name
        this.productId=productId
        this.price=price
    }

    displayDetails(){
        console.log(this.name);
        console.log(this.productId);
        console.log(this.price);
        
    }
}

const a = new Product("phone",12345,20000)

a.displayDetails()