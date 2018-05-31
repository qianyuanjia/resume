!function(){	
	let view=View('.topNav');
	let options={
		init:function(){
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
	let controller=Controller(view,null,options);
	controller.init();

}.call()