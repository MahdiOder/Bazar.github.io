
loadBlog = async () => {
    const mainTemplate = document.getElementById("blog-item-template").innerHTML;
    const mainBox = document.getElementById("blog-box");

    const api = new BlogAPI();
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
