let laodBasketData = () => {
    let template = document.getElementById("basket-template-body").innerHTML;
    let holder = document.getElementById("basket-table");
    let dataList = BasketDB.load();
    if (dataList == null || dataList.length == 0) {
        return;
    }
    holder.innerHTML = "";
    dataList.forEach((basket, index) => {
        if (basket != null) {
            let currentProduct = template;
            currentProduct = currentProduct.replace(/__ID__/g, basket.id);
            currentProduct = currentProduct.replace('__IMG__', basket.image);
            currentProduct = currentProduct.replace('__TITLE__', basket.title);
            currentProduct = currentProduct.replace('__PRICE__', basket.price);
            currentProduct = currentProduct.replace('__QTY__', basket.qty);
            currentProduct = currentProduct.replace('__CTITLE__', basket.colorTitle);
            currentProduct = currentProduct.replace('__CHEX__', basket.colorHex);
            currentProduct = currentProduct.replace('__STITLE__', basket.sizeTitle);
            currentProduct = currentProduct.replace(/__CID__/g, basket.colorId);
            currentProduct = currentProduct.replace(/__SID__/g, basket.sizeId);
            holder.innerHTML += currentProduct;
        }
    });
    calculateTotalPrice();
}

increaseQTY = (id, cid, sid) => {
    let result = BasketDB.increaseQTY(id, cid, sid);
    if (result > 0) {
        document.getElementById("qty_" + id + cid + sid).innerText = result;
    }
    calculateTotalPrice();
}

decreaseQTY = (id, cid, sid) => {
    let result = BasketDB.decreaseQTY(id, cid, sid);
    if (result > 0) {
        document.getElementById("qty_" + id + cid + sid).innerText = result;
    } else {
        document.getElementById("basket-item-" + id + cid + sid).remove();
        location.href = location.href;
    }
    calculateTotalPrice();
}


calculateTotalPrice = () =>{
    let dataList = BasketDB.load();
    let sum = 0;
    dataList.forEach((basket, index) => {
        if (basket != null) {
            sum += basket.qty * basket.price;
        }
    });
    document.getElementById("basket-sum").innerText = `Total Price : ${sum}$`;
}