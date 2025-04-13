let selectedSize = null;
let selectedColor = null;
let currentProduct = null;

window.onload = async () => {
    let id = getParameterByName("id");

    const api = new ProductAPI();
    await api.getById(id, function (dataList) {

        let data = dataList[0];
        currentProduct = data;
        document.getElementById("product-image").src = data.image;
        document.getElementById("product-title").innerText =
            `${data.category.title} - ${data.title}`;
        document.getElementById("description").innerHTML = data.description;

        const colorsEle = document.getElementById("colors");
        const colorsTemplate = document.getElementById("product-color-template").innerHTML;
        colorsEle.innerHTML = "";
        for (let index = 0; index < data.colors.length; index++) {
            let template = colorsTemplate;
            template = template.replace(/__TITLE__/g, data.colors[index].title);
            template = template.replace(/__ID__/g, data.colors[index].id);
            template = template.replace(/__HEX__/g, data.colors[index].hexValue);
            colorsEle.innerHTML += template;
        }

        const sizesEle = document.getElementById("sizes");
        const sizesTemplate = document.getElementById("product-size-template").innerHTML;
        sizesEle.innerHTML = "";
        for (let index = 0; index < data.sizes.length; index++) {
            let template = sizesTemplate;
            template = template.replace(/__TITLE__/g, data.sizes[index].title);
            template = template.replace(/__ID__/g, data.sizes[index].id);
            sizesEle.innerHTML += template;
        }

    });
}

changeSize = (ele, id, title) => {
    let oldSizes = document.getElementsByClassName("product-size-selected");
    for (let index = 0; index < oldSizes.length; index++) {
        oldSizes[index].classList.remove("product-size-selected")
    }
    ele.children[0].classList.add("product-size-selected");
    selectedSize = {
        id: id,
        title: title
    };
}



changeColor = (ele, id, title, hex) => {
    let oldColors = document.getElementsByClassName("product-color-selected");
    for (let index = 0; index < oldColors.length; index++) {
        oldColors[index].classList.remove("product-color-selected")
    }
    ele.children[0].classList.add("product-color-selected");
    selectedColor = {
        id: id,
        title: title,
        hex: hex
    };
}

let addToBasket = () => {
    let id = getParameterByName("id");
    if(selectedColor == null){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select color!'
          });
        return;
    }
    if(selectedSize == null){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select size!'
          });
        return;
    }
    BasketDB.addToBasket(currentProduct, selectedColor, selectedSize);
}