!function(){
	let view=View('body');
	let options={
		init:function(){
			this.aSlideUp=view.querySelectorAll('.slide-up');
			this.len=this.aSlideUp.length;
			this.docHeight=document.documentElement.clientHeight || document.body.clientHeight;
			this.lastScrollY=0;
			this.currentScrollY=0;
			this.bindEvents();
		},
		bindEvents:function(){
			window.addEventListener('scroll',this.slideDiv.bind(this));
		},
		slideDiv:function(){
			this.currentScrollY=window.scrollY;
			for(let i=0;i<this.len;i++){
				if(i != 0 && this.aSlideUp[i].getBoundingClientRect().top>this.docHeight){
					this.aSlideUp[i].classList.add('hide');
					this.aSlideUp[i].classList.remove('slide_up_ani');
				}
				if(i != 0 && this.aSlideUp[i].getBoundingClientRect().top>0 && this.docHeight-this.aSlideUp[i].getBoundingClientRect().top>100){
					if(this.currentScrollY-this.lastScrollY>0){
						this.aSlideUp[i].classList.remove('hide');
						this.aSlideUp[i].classList.add('slide_up_ani');
					}
				}

			}
			this.lastScrollY=this.currentScrollY;
		}
	}
	let controller=Controller(view,null,options);
	controller.init();
	
}.call()





