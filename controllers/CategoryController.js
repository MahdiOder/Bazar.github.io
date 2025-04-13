
loadCategories = async () => {
    const mainTemplate = document.getElementById("category-item-template").innerHTML;
    const mainBox = document.getElementById("category-box");

    const api = new CategoryAPI();
    await api.getAll(function (data) {
        for (let index = 0; index < data.length; index++) {
            let template = mainTemplate;
            template = template.replace(/__TITLE__/g, data[index].title);
            template = template.replace(/__IMG__/g, data[index].image);
            template = template.replace(/__ID__/g, data[index].id);
            mainBox.innerHTML += template;
        }
    });
}
