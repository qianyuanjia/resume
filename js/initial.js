!function(){
	let view=document.querySelectorAll('.slide-up');
	let controller={
		view:null,
		oLoadingWrap:null,
		init:function(){
			this.view=view;
			this.oLoadingWrap=document.getElementById('loading_wrap');
			this.openRS();
		},
		openRS:function(){
			setTimeout(function(){
				window.scrollTo(0,0);
				document.body.classList.remove('init');
				this.oLoadingWrap.classList.remove('show');
				this.view[0].classList.add('slide_up_ani');
			}.bind(this),1000);
		}
	}

	controller.init();
}.call()
