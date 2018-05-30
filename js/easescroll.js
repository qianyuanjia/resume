!function(){
    let view = document.querySelectorAll('.topNav .nav>li>a[href|="#site"]');
    let controller = {
        view: null,
        init: function () {
            this.view = view
        },
        tweeninit: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }

            requestAnimationFrame(animate);
        },
        bindEvents: function () {
            for (let i = 0; i < this.view.length; i++) {
                this.view[i].addEventListener('click', this.easemove.bind(this.view[i]));
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

    controller.init();
    controller.tweeninit();
    controller.bindEvents();

}.call()


