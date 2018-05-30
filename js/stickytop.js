!function(){	
	let view=document.querySelector('.topNav');
	let controller={
		view:null,
		currentScrollY:undefined,
		init:function(view){
			this.view=view;
			this.currentScrollY=window.scrollY;
			this.bindEvents();
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
	controller.init(view);
}.call()