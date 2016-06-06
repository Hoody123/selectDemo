/// <reference path="vue.js" />
/// <reference path="jquery-1.9.0.min.js" />

var vm = new Vue({
    el: '#dropdown',
    data: {
        content: '3',
        items: [
            { content: '點擊新增一個新的選項', display: false },
            { content: '3', display: true },
            { content: '1', display: true },
            { content: '2', display: true },
            { content: '4', display: true },
            { content: '5', display: true }
        ],
        keyword: ''
    },
    methods: {
        //切換選中內容
        changeContent: function (item) {
            if (this.items.indexOf(item)==0) {
                if (this.keyword != '') {
                    this.items.push({
                        content: this.keyword,
                        display: true
                    });
                    this.items[0].display = false;
                }
            } else {
                this.content = item.content;
            }
        },

        //搜索
        search: function () {
            var _keyword = $.trim(this.keyword);
            var _count;
            //判斷關鍵字是否為空
            if (_keyword == '') {
                this.keyword = '';
            }
            _count = this.checkOption(_keyword);
            //如果沒有搜索值 則顯示可以新增一個
            if (_count == 0) {
                this.items[0].display=true;
             }else{
                 this.items[0].display=false;
             }
        },

        //遍歷已有的選項,如果關鍵字為空則全部顯示
        checkOption: function (keyword) {
            var _flag = false;
            for (var i = 1; i < this.items.length; i++) {
                if (this.items[i].content.indexOf(keyword) != -1) {
                    this.items[i].display =true;
                    _flag = true;
                } else {
                    this.items[i].display =false;
                }
            }
            return _flag;
        }
    }
})
