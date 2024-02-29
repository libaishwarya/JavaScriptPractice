const store_items = {
    phone: 305,
    laptop: 323,
    watch: 164
};

function totalCostOfItem() {
    let itemCost = 0;
    for (const key in store_items) {
        itemCost += store_items[key];
    }
    return itemCost;
}

let user_list = [];

function ifKeyExists(item) {
    let input_item = item;
    if (store_items.hasOwnProperty(input_item)) {
        user_list.push({ key: item, pricee: store_items[item] });
    } else {
        console.log("item does not exist");
    }
    return user_list;
}

function calculateUserList() {
    let cart_amount = 0;
    user_list.forEach(item => {
        cart_amount += item.pricee;
    });
    return cart_amount;
}

function discount(amount) {
    const tenPercent = amount * 0.1;
    console.log("Discounted amount is", tenPercent);
    return tenPercent;
}

function payCash(amount, dis) {
    let discount_amount = 0;
    if (amount > 400) {
        console.log("10% off available");
        discount_amount = amount - dis;
        console.log("Amount to be paid is:", discount_amount);
    } else {
        console.log("No offer available");
    }
    return discount_amount;
}

ifKeyExists("phone");
ifKeyExists("laptop");
ifKeyExists("watch");

console.log(user_list);
const totalAmount = calculateUserList();
const dis = discount(totalAmount);
console.log(payCash(totalAmount, dis));

