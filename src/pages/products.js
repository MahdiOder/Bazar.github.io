const pageSize = 6;
let pageIndex = 0;
window.stopLoading = false;

window.onload = async () => {
    await loadCategories();
    await loadPageData();
}

window.onscroll = async () => {
    let lastElement = document.getElementById("products-box").lastChild;
    let offsetTop = lastElement.previousElementSibling.offsetTop;
    if (window.scrollY > offsetTop && !stopLoading) {
        ++pageIndex;
        await loadPageData();
    }
}

loadPageData = async () => {
    let catId = getParameterByName("catId");
    let catName = getParameterByName("catName");
    if (catId == undefined || catId == null) {
        await loadProducts(null, 'All', pageIndex, pageSize);
    } else {
        await loadProducts(null, 'Category', pageIndex, pageSize, catId, catName);
    }
}
