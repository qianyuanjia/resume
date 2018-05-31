!function(){
    let view = View('.topNav .nav');
    let options={
        init:function(){
            this.aA=view.querySelectorAll('a[href|="#site"]');
            this.tweeninit();
            this.bindEvents();
        },
        tweeninit: function () {
             function animate(time) {
                 requestAnimationFrame(animate);
                 TWEEN.update(time);
             }

             requestAnimationFrame(animate);
         },
         bindEvents: function () {
             for (let i = 0; i < this.aA.length; i++) {
                 this.aA[i].addEventListener('click', this.easemove.bind(this.aA[i]));
             }
         },
         easemove: function () {
             let currentTop = window.scrollY;
             let targetTop = document.querySelector(this.getAttribute('href')).offsetTop - 80;
             let coords = {y: currentTop};
             let time = Math.min(Math.abs(currentTop - targetTop) / 100 * 200, 500);
             let tween = new TWEEN.Tween(coords)
                 .to({y: targetTop}, time)
                 .easing(TWEEN.Easing.Quadratic.Out)
                 .onUpdate(function () {
                     window.scrollTo(0, coords.y);
                 })
                 .start();
             return false;
         }
    }
    let controller=Controller(view,null,options);
    controller.init();
    
}.call()


