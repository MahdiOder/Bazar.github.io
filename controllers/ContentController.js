loadAbout = async () => {
    const mainBox = document.getElementById("about-box");

    const api = new ContentAPI();
    await api.getAll(function (data) {
        for (let index = 0; index < data.length; index++) {
            if (data[index].title == "about-us") {
                mainBox.innerHTML = data[index].description;
            }
        }
    });
}