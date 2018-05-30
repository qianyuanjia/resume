!function(){
	let view=document.querySelectorAll('.topNav .nav>li>a[href|="#site"]');
	let controller={
		view:null,
		init:function(view){
			this.view=view;
			this.minAct=0;
			this.aAnchorEle=document.querySelectorAll('[id |= site]');
			this.bindEvents();
		},
		bindEvents:function(){
			window.addEventListener('scroll',this.slideNavBar.bind(this));
		},
		slideNavBar:function(){
			for(let i=0;i<this.view.length;i++){
				if(Math.abs(this.aAnchorEle[i].getBoundingClientRect().top)<Math.abs(this.aAnchorEle[this.minAct].getBoundingClientRect().top)){
					this.view[this.minAct].parentNode.classList.remove('active');
					this.minAct=i;
				}
			}
			if(this.view[this.minAct].parentNode.className.indexOf('active')==-1){
				this.view[this.minAct].parentNode.classList.add('active');
			}
		}
	}

	controller.init(view);
}.call()
