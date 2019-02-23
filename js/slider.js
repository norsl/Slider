function Slider(obj){
    if(!obj.node){
        console.log("需要一个slider容器节点");
        return false;
    }

    // slider宽，不传值的话默认父元素的宽度
    this.width = obj.width;
    // slider高，不传值的话默认父元素的宽度
    this.height = obj.height;
    // 默认起始位置
    this.index = obj.index ? objx.index : 1;
    // 是否自动播放
    this.auto = obj.auto;
    // 自动播放间隔，单位：秒
    this.time = obj.time ? obj.time : 3;
    // 自动播放flag
    var autoFlag = null;


    // 获取slider相关元素节点
    var sliderWrap = obj.node;
    var sliderParent = sliderWrap.parentNode;
    var sliderUL = sliderWrap.querySelector(".item-container");
    var sliderIndex = sliderWrap.querySelector(".slider-index");
    var items = sliderUL.querySelectorAll(".slider-item");
    var nextBtn = sliderWrap.querySelector(".slider-next");
    var previousBtn = sliderWrap.querySelector(".slider-previous");


    // 下一页
    this.next = () => {
        this.index ++;
        if(this.index <= items.length){
            this.setPosition()
        }else{
            this.index = 1;
            this.setPosition()
        }
    }

    // 上一页
    this.previous = () => {
        this.index --;
        if(this.index <= 0){
            this.index = items.length;
            this.setPosition()
        }else{
            this.setPosition()
        }
    }

    // 设置ul离左边的距离
    this.setPosition = (index) => {
        if(index){
            this.index = index
        }
        sliderIndex.querySelectorAll('span')[this.index - 1].style.background = '#444444';
        if(this.index - 2 < 0){
            sliderIndex.querySelectorAll('span')[items.length - 1].style.background = '#FFFFFF';
        }else{
            sliderIndex.querySelectorAll('span')[this.index - 2].style.background = '#FFFFFF';
        }
        sliderUL.style.left = "-" + (this.index - 1) * this.width + "px";
    }

    // 设置自动播放
    var autoPlay = () => {
        if(this.auto){
            autoFlag = setInterval(this.next, this.time * 1000)
        }
    }

    var createIndex = () => {
        var indexNode;
        for(var i = 0; i < items.length; i ++){
            node = document.createElement("span");
            text = document.createTextNode("");
            node.appendChild(text);
            sliderIndex.appendChild(node);
        }
    }

    // 初始化css样式及事件
    var init = () => {
        if(this.width == undefined){
            this.width = sliderParent.offsetWidth
        }

        if(this.height == undefined){
            this.height = sliderParent.offsetHeight
        }

        // slider容器样式
        sliderWrap.style.cssText = `
            width: ${this.width}px;
            height: ${this.height}px;
            background: #f5f5f5;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
        `;

        // item容器样式
        sliderUL.style.cssText = `
            width = ${items.length * this.width}px;
            position: absolute;
            display: flex;
            height:100%;
            transition: all 1s;
        `;

        // 索引样式
        sliderIndex.style.cssText = `
            position: absolute;
            bottom:10px;
            width:100%;
            text-align: center;
        `;
        for(var i of sliderIndex.querySelectorAll('span')){
            i.style.cssText = `
                display: inline-block;
                background:#fff;
                padding: 6px;
                margin:0 5px;
                border-radius:50px;
            `;
        }
        
        // 下一项样式
        nextBtn.style.cssText = `
            position: absolute;
            right:-50px;
            cursor:pointer;
            text-indent: 3px;
            color:#fff;
            width:50px;
            height:50px;
            font-size:40px;
            text-align: center;
            line-height: 40px;
            margin-top: 0;
            border-radius:50px;
            background: rgba(0, 0, 0, 0.5);
            transition: all 0.2s;
        `;

        // 上一项样式
        previousBtn.style.cssText = `
            position: absolute;
            left:-50px;
            cursor:pointer;
            text-indent: -5px;
            color:#fff;
            width:50px;
            height:50px;
            font-size:40px;
            text-align: center;
            line-height: 40px;
            margin-top: 0;
            border-radius:50px;
            background: rgba(0, 0, 0, 0.5);
            transition: all 0.2s;
        `;

        for(var i of items){
            i.style.width = this.width + "px";
        }

        sliderWrap.onmouseover = function(){
            nextBtn.style.right = 5 + "px";
            previousBtn.style.left = 5 + "px";
            clearInterval(autoFlag);
        }
        sliderWrap.onmouseout = function(){
            autoPlay();
            nextBtn.style.right = -50 + "px";
            previousBtn.style.left = -50 + "px";
        }
    }


    // 开始
    this.start = () => {
        // 创建slider索引
        createIndex();
        // 初始化css样式
        init();
        // 设置当前位置
        this.setPosition();
    
        // 设置按钮单击事件
        nextBtn.onclick = this.next;
        previousBtn.onclick = this.previous;

        autoPlay();
    }
}