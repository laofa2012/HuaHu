
Zepto(function($){
  var app = {
    init: function() {
      this.$btnMenu = $('.btn-menu');
      this.$btnMenuImg = $('.btn-menu img');
      this.$menuList = $('.menu-list');
      this.$menuListItem = $('.menu-list li');
      this.$container = $('.content');

      // 下面留白
      $('.patent-copyright').css('height', ($(window).height() - 125) + 'px');

      // 参数
      this.pageItem = $.getUrlParam('item');
      // 会员注册协议
      if (this.pageItem === 'agreement') {
        app.moveToAgreement();
      }
      // 版权和专利
      else if (this.pageItem === 'patentCopyright') {
        app.moveToPatentCopyright();
      }
      // // 返回按钮
      // else if (this.pageItem === 'back') {
      //   var backBtn = $('#back-to-url');
      //   backBtn.css('display', 'block');
      //   backBtn.load('../component/close.html');
      // }

      this.bindEvent();
    },

    /**
     * 绑定回调事件
     */
    bindEvent: function() {

      // 会员注册协议
      $('.menu-item-agreement').on('click', function () {
        app.moveToAgreement();
      });

      // 版权和专利
      $('.menu-item-patent-copyright').on('click', function () {
        app.moveToPatentCopyright();
      });

      // 返回上一页
      $('#back-to-url').on('click', function () {
        app.backToUrl();
      });

      // Menu 展开与闭合
      this.$menuListItem.on('click', app.menuListShowOrHidden);
      this.$btnMenu.on('click', app.menuListShowOrHidden);
    },

    /**
     * 返回Url
     */
    backToUrl: function() {
      window.history.back();
      // window.history.go(-1);
    },

    /**
     * Menu 展开与闭合
     */
    menuListShowOrHidden: function() {
      // console.log('click:' + app.$menuList.height());

      if (app.$menuList.height() == 0) {
        app.$btnMenuImg.attr('src', './images/menu-cancel.jpg');

        app.$btnMenu.animate({
          rotateZ: '-90deg'
        }, 300);

        app.$menuList.animate({
          height: '120px'
        }, 300);

        app.$container.animate({
          marginTop: '180px'
        }, 300);
      }
      else {
        app.$btnMenuImg.attr('src', './images/menu-list.jpg');

        app.$btnMenu.animate({
          rotateZ: '0deg'
        }, 300);

        app.$menuList.animate({
          height: 0
        }, 300);

        app.$container.animate({
          marginTop: '60px'
        }, 300);
      }
    },

    /**
     * 滚动到，会员注册协议
     */
    moveToAgreement: function() {
      app.$container.scrollTop(0);
    },

    /**
     * 滚动到，版权和专利
     */
    moveToPatentCopyright: function() {
      app.$container.scrollTop($('.patent-copyright-title').offset().top + app.$container.scrollTop());
    }
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
