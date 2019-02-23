>只需要在html里面写上结构，然后引入js文件，最后执行方法就行了。css样式也不需要写，已经封装在js里面了。  
>常用的上下翻页，自动播放，播放间隔时间都弄好了，在初始化slider得时候传一个配置对象一切就都解决了。  
>需要多个slider的时候，只需写上html，然后实例化slider传递配置参数就行了  

```
<script>
window.onload = function(){
    // 获取slider容器节点
    var sliderWrap = document.querySelector(".slider-wrap");
    
    // 实例化slider时候需要传递一个对象
    // 必选属性
    // -------- node：slider容器节点
    // -------- auto：是否自动播放
    // 可选属性
    // -------- width：slider容器宽度（默认父级元素的宽度，一般不需要设置）
    // -------- height：slider容器高度（默认父级元素的高度，一般不需要设置）
    // -------- time：自动切换的时间（单位：秒。默认3秒）
    // -------- index：默认起始图片（默认1）
    var slider = new Slider({
        node: sliderWrap,
        auto: true,
        time:  5
    });
    
    slider.start();
}
</script>
```
