const { PassThrough } = require("stream");

const store_items = {
    phone : 300,
    laptop :200,
    watch : 100
};

console.log(store_items)

function totalCostOfItem(){
    let allItemCost = 0
    for (const key in store_items){
        allItemCost +=store_items[key]
    }

    return allItemCost}
console.log(totalCostOfItem())

let user_list = [];
function ifKeyExists(item){
    let input_item = item;
    if (store_items.hasOwnProperty(input_item)){
        // console.log("key exists")
        user_list.push({key: item, pricee: store_items[item]});
    }
    else{
        console.log("key does not exits")
    }
    return user_list;
}

function calculateUserList(){
    let cart_amount = 0;
    user_list.forEach(item =>{
        cart_amount = cart_amount+ item.pricee ;
    });
    return cart_amount;
}
 
function payCash(amt){
    if(amt>400){
        console.log("10% off available")
    }
    else{
        console.log("no offer")
    }    
}
// ifKeyExists("phone");
ifKeyExists("laptop");

// ifKeyExists("lapto");
console.log(user_list)

console.log(calculateUserList())
amont = calculateUserList()
payCash(amont)




