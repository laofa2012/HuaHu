
Zepto(function($){
    const app = {
        init: function () {
            // 参数
            this.guess = $.getUrlParam('guess');

            // 地址
            this.ios_url = $('#ios_url').value;
            this.android_url = $('#android_url').value;

            // 系统
            const os = $.os;

            // 按钮
            const ios_btn = $('.down-btn')[0];
            const android_btn = $('.down-btn')[1];

            // 按钮绑定事件
            ios_btn.on('click', app.download_ios);
            android_btn.on('click', app.download_android);

            // 判断是IOS还是Android
            if (os.ios) {
                android_btn.css('display', 'none');
                app.open_ios();
            } else if (os.android) {
                ios_btn.css('display', 'none');
                app.download_android();
            }
        },

        // 是否是微信网页
        isWechatWebSite: function() {
            var u = navigator.userAgent;
            return u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';
        },

        // IOS
        open_ios: function() {
            // 判断是不是微信浏览器
            if (app.isWechatWebSite) {
                app.download_ios();
            } else {
                window.location.href = 'huahu://?guess=' + this.guess;
            }
        },

        // 下载IOS
        download_ios: function() {
            alert(123); return;
            if(this.ios_url) {
                window.location.href = this.ios_url;
            } else {
                alert('该应用暂不支持苹果用户下载，请用安卓手机访问');
            }
        },

        // 下载Android
        download_android: function() {
            alert(456); return;
            if(this.android_url) {
                window.location.href = this.android_url;
            } else {
                alert('该应用暂不支持安卓用户下载，请用苹果手机访问');
            }
        },
    };
    app.init();
});

// 为Zepto扩展一个获取Url参数到函数
(function($) {
  $.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }
})(Zepto);
