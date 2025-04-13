window.onload = async () => {
    let id = getParameterByName("id");
    const api = new BlogAPI();
    await api.getById(id, function (dataList) {

        let data = dataList[0];
        document.getElementById("blog-image").src = data.image;
        document.getElementById("blog-title").innerText =
            `${data.title}`;
        document.getElementById("blog-subtitle").innerText =
            `${data.subTitle}`;
        document.getElementById("blog-visit").innerText =
            `${data.visitCount}`;
        document.getElementById("description").innerHTML = data.description;
    });
}