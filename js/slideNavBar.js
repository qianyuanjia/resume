!function(){
	let view=View('.topNav .nav');
	let options={
		init:function(){
			this.aA=view.querySelectorAll('a[href|="#site"]');
			this.minAct=0;
			this.aAnchorEle=document.querySelectorAll('[id |= site]');
			this.bindEvents();
		},
		bindEvents:function(){
			window.addEventListener('scroll',this.slideNavBar.bind(this));
		},
		slideNavBar:function(){
			for(let i=0;i<this.aA.length;i++){
				if(Math.abs(this.aAnchorEle[i].getBoundingClientRect().top)<Math.abs(this.aAnchorEle[this.minAct].getBoundingClientRect().top)){
					this.aA[this.minAct].parentNode.classList.remove('active');
					this.minAct=i;
				}
			}
			if(this.aA[this.minAct].parentNode.className.indexOf('active')==-1){
				this.aA[this.minAct].parentNode.classList.add('active');
			}
		}
	}
	let controller=Controller(view,null,options);
	controller.init();
	
}.call()
