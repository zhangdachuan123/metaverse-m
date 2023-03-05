(function () {
    function setHtml() {
        //设计稿尺寸
        let designSize = 750;
        //获取设备宽度(窗口尺寸)
        var deviceWidth = document.documentElement.offsetWidth;
        console.log(deviceWidth);
        // 给html标签设置fontSize，就是给rem赋值   deviceWidth / 375 * 10 + 'px';
        if (deviceWidth > 768) {
            deviceWidth = 768
        }
        document.documentElement.style.fontSize = deviceWidth * 72 / designSize + 'px';
        // document.documentElement.style.fontSize = deviceWidth / designSize * 18 + 'px';
    }
    //页面初始加载时也要触发
    setHtml();
    //窗口大小变化的时候执行
    window.onresize = setHtml;
})();

