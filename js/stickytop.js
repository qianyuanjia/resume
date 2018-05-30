!function(){	
	let view=document.querySelector('.topNav');
	let controller={
		view:null,
		currentScrollY:undefined,
		init:function(){
			this.view=view;
			this.currentScrollY=window.scrollY;
		},
		bindEvents:function(){		
			window.addEventListener('scroll',this.stickyTop.bind(this));
		},
		stickyTop:function(){
			this.currentScrollY=window.scrollY;
			if(this.currentScrollY>0){
				this.view.classList.add('sticky');
			}else{
				this.view.classList.remove('sticky');
			}
		}
	}
	controller.init();
	controller.bindEvents();
}.call()