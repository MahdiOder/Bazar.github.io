loadProductsData = async (target, pageIndex, pageSize, catId) => {
    const api = new ProductAPI();
    if (target == 'Popular') {
        await api.getPopularProducts(callback);
    } else if (target == 'New') {
        await api.getNewProducts(callback);
    } else if (target == 'All') {
        await api.getAll(pageIndex, pageSize, callbackProducts);
    } else if (target == 'Category') {
        await api.getByCategoryId(catId, pageIndex, pageSize, callbackProducts);
    }
}

function callback(data) {
    const mainTemplate = document.getElementById("product-item-template").innerHTML;
    const mainBox = document.getElementById("products-box");
    mainBox.innerHTML = "";
    for (let index = 0; index < data.length; index++) {
        let template = mainTemplate;
        template = template.replace(/__TITLE__/g, data[index].title);
        template = template.replace(/__IMG__/g, data[index].image);
        template = template.replace(/__ID__/g, data[index].id);
        mainBox.innerHTML += template;
    }
}

function callbackProducts(data) {
    const mainTemplate = document.getElementById("product-item-template").innerHTML;
    const mainBox = document.getElementById("products-box");
    for (let index = 0; index < data.length; index++) {
        let template = mainTemplate;
        template = template.replace(/__TITLE__/g, data[index].title);
        template = template.replace(/__IMG__/g, data[index].image);
        template = template.replace(/__ID__/g, data[index].id);
        mainBox.innerHTML += template;
    }

    if (data.length == 0) {
        window.stopLoading = true;
    }
}

loadProducts = async (currentItem, target, pageIndex, pageSize, catId, catName) => {
    const oldItems = document.getElementsByClassName("tag-btn");
    for (ele of oldItems) {
        ele.classList.remove("tag-btn-select");
    }
    if (currentItem == null) {
        currentItem = document.getElementById("popular-tag-btn");
    }
    if (currentItem != null) {
        currentItem.classList.add("tag-btn-select");
    }
    if (catName != undefined && catName != null) {
        document.getElementById("product-main-title").innerText =
            catName;
    } else {
        document.getElementById("product-main-title").innerText =
            target + " Products";
    }

    await loadProductsData(target, pageIndex, pageSize, catId);
}

