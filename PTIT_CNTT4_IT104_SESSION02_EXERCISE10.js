const products=[
    {name:"A",price:100,discount:0.1,quantity:2},
    {name:"B",price:200,discount:0.2,quantity:1,bulkDiscount:{minQuantity:2,extraDiscount:0.05}},
    {name:"C",price:300,discount:0,quantity:3,bulkDiscount:{minQuantity:3,extraDiscount:0.1}}
];
const result={
    totalBeforeDiscount:0,
    totalAfterDiscount:0,
    details:[]
};
products.forEach(product=>{
    const{name,price,discount,quantity,bulkDiscount}=product;
    // tinh giam gia co ban
    let finalDiscount = discount;
    // ap dung giam gia theo so luong neu du dieu kien
    if(bulkDiscount&&quantity >= bulkDiscount.minQuantity){
        finalDiscount += bulkDiscount.extraDiscount;
    }
    // tinh gia sau giam va lam tron
    const finalPrice = Math.round(price*(1-finalDiscount));
    const subtotal = finalPrice*quantity;

    result.totalBeforeDiscount += price*quantity;
    result.totalAfterDiscount += subtotal;

    result.details.push({name,finalPrice,quantity,subtotal});
});
console.log(result);
