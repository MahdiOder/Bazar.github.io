
loadSlider = async () => {
    const sliderTemplate = document.getElementById("slide-item-template").innerHTML;
    const sliderBox = document.getElementById("slides-box");

    const sliderAPI = new SliderAPI();
    await sliderAPI.getAll(function (data) {
        for (let index = 0; index < data.length; index++) {
            let template = sliderTemplate;
            template = template.replace(/__TITLE__/g, data[index].title);
            template = template.replace("__IMG__", data[index].image);
            template = template.replace("__SUBTITLE__", data[index].subTitle);
            template = template.replace("__LINK__", data[index].link);
            sliderBox.innerHTML += template;
        }
        prepareSlider();
    });
}

prepareSlider = () => {

    $('.slideshow').slideshowPlugin({
        effect: 'sliding',
        slideSpeed: 800,
        ratio: "keep",
    });

    // Typing Text
    var content = $('.copy-title').text();

    var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

    $(ele).hide().appendTo('.main-title').each(function (i) {
        $(this).delay(100 * i).css({
            display: 'inline',
            opacity: 0
        }).animate({
            opacity: 1
        }, 100);
    });
    // End Typing text
}