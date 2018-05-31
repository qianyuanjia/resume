!function(){
	let view=View('body');
	let options={
		init:function(){
			this.aSlideUp=view.querySelectorAll('.slide-up');
			this.oLoadingWrap=view.querySelector('#loading_wrap');
			this.openRS();
		},
		openRS:function(){
				setTimeout(function(){
					window.scrollTo(0,0);
					document.body.classList.remove('init');
					this.oLoadingWrap.classList.remove('show');
					this.aSlideUp[0].classList.add('slide_up_ani');
				}.bind(this),1000);
			}
	}
	let controller=Controller(view,null,options);
	controller.init();
	
}.call()
