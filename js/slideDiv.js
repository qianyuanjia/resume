!function(){
	let view=document.querySelectorAll('.slide-up');
	let controller={
		view:null,
		len:undefined,
		docHeight:undefined,
		lastScrollY:undefined,
		currentScrollY:undefined,
		init:function(){
			this.view=view;
			this.len=document.querySelectorAll('[id |= site]').length;
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
				if(i != 0 && this.view[i].getBoundingClientRect().top>this.docHeight){
					this.view[i].classList.add('hide');
					this.view[i].classList.remove('slide_up_ani');
				}
				if(i != 0 && this.view[i].getBoundingClientRect().top>0 && this.docHeight-this.view[i].getBoundingClientRect().top>100){
					if(this.currentScrollY-this.lastScrollY>0){
						this.view[i].classList.remove('hide');
						this.view[i].classList.add('slide_up_ani');
					}
				}

			}
			this.lastScrollY=this.currentScrollY;
		}
	}
	controller.init();
}.call()





