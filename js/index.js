
Zepto(function($){
    const app = {
        init: function () {
            // 参数
            this.$guess = $.getUrlParam('guess');
            this.$prodoction = $.getUrlParam('prodoction');

            // 地址
            this.$ios_url = 'https://itunes.apple.com/cn/app/id1041860593?mt=8'; // id1110297911
            this.$android_url = '';

            // 系统
            const os = $.os;

            // 按钮
            const ios_btn = $('.ios-btn');
            const android_btn = $('.android-btn');

            // Tips
            this.$ios_tips_img = $('.ios-open-tips');


            // 按钮绑定事件
            ios_btn.on('click', this.download_ios);
            android_btn.on('click', this.download_android);

            // 判断是IOS还是Android
            if (os.ios) {
                ios_btn.css('display', 'inline-block');
                this.open_ios();
            } else if (os.android) {
                android_btn.css('display', 'inline-block');
                this.download_android();
            } else {
                ios_btn.css('display', 'inline-block');
                android_btn.css('display', 'inline-block');
            }
        },

        // 是否是微信网页
        isWechatWebSite: function() {
            const u = window.navigator.userAgent;
            return u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';
        },

        // IOS
        open_ios: function() {
            // 判断是不是微信浏览器
            if (app.isWechatWebSite()) {
                app.$ios_tips_img.css('display', 'block');
                app.download_ios();
            } else {
                if (app.$guess) {
                    window.location.href = 'huahu://?guess=' + app.$guess;
                } else if (app.$prodoction) {
                    window.location.href = 'huahu://?prodoction=' + app.$prodoction;
                }
            }
        },

        // 下载IOS
        download_ios: function() {
            if(app.$ios_url) {
                window.location.href = app.$ios_url;
            } else {
                alert('该应用暂不支持苹果用户下载，请用安卓手机访问');
            }
        },

        // 下载Android
        download_android: function() {
            if(app.$android_url) {
                window.location.href = app.$android_url;
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
