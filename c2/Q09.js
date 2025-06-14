class InvalidCouponCode extends Error{
    constructor(message){
        super(message)
        this.name = "Invalid Coupon Detected "
    }
}

try {
    coupon=false
    if(coupon==false){
        throw new InvalidCouponCode(" Please check coupon validity")
    }
} catch (error) {
    console.log(error.name+":"+error.message);
}