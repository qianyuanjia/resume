window.onload=function(){
	var oProgress=document.getElementById('prog');
	var oWorks=document.getElementById('works');
	var aLis=oWorks.getElementsByTagName('li');
	var oLoadingWrap=document.getElementById('loading_wrap');
	var oTopNav=document.querySelector('.topNav');
	var aNavAnchor=document.querySelectorAll('.topNav .nav>li>a[href|="#site"]');
	var aSlideUp=document.querySelectorAll('.slide-up');
	setTimeout(function(){
		window.scrollTo(0,0);
		document.body.classList.remove('init');
		oLoadingWrap.classList.remove('show');
		aSlideUp[0].classList.add('slide_up_ani');
	},1000);

	let aAnchorEle=document.querySelectorAll('[id |= site]');
	let minAct=0;
	let lastScrollY=0;
	var docHeight=document.documentElement.clientHeight || document.body.clientHeight;
	window.onscroll=function(){
		var currentScrollY=window.scrollY;
		if(currentScrollY>0){
			oTopNav.classList.add('sticky');
		}else{
			oTopNav.classList.remove('sticky');
		}
		for(let i=0;i<aAnchorEle.length;i++){
			if(Math.abs(aAnchorEle[i].getBoundingClientRect().top)<Math.abs(aAnchorEle[minAct].getBoundingClientRect().top)){
				aNavAnchor[minAct].parentNode.classList.remove('active');
				minAct=i;
			}
			if(i != 0 && aSlideUp[i].getBoundingClientRect().top>docHeight){
				aSlideUp[i].classList.add('hide');
				aSlideUp[i].classList.remove('slide_up_ani');
			}
			if(i != 0 && aSlideUp[i].getBoundingClientRect().top>0 && docHeight-aSlideUp[i].getBoundingClientRect().top>100){
				if(currentScrollY-lastScrollY>0){
					aSlideUp[i].classList.remove('hide');
					aSlideUp[i].classList.add('slide_up_ani');
					console.log(aSlideUp[i].getBoundingClientRect().top+'---'+docHeight)
				}
			}

		}
		if(aNavAnchor[minAct].parentNode.className.indexOf('active')==-1){
			aNavAnchor[minAct].parentNode.classList.add('active');
		}
		lastScrollY=currentScrollY;
	}
	for(var i=0;i<aLis.length;i++){
		aLis[i].index=i+1;
		aLis[i].onclick=function(){
			oProgress.className='progress state-'+this.index;
		}
	}

	function animate(time) {
	    requestAnimationFrame(animate);
	    TWEEN.update(time);
	}
	requestAnimationFrame(animate);

	for(let i=0;i<aNavAnchor.length;i++){
		aNavAnchor[i].onclick=function(){
			var currentTop=window.scrollY;
			var targetTop=document.querySelector(this.getAttribute('href')).offsetTop-80;
			var coords = { y: currentTop };
			var time=Math.min(Math.abs(currentTop-targetTop)/100*200,500);
			var tween = new TWEEN.Tween(coords) 
			        .to({ y: targetTop }, time) 
			        .easing(TWEEN.Easing.Quadratic.Out) 
			        .onUpdate(function() { 
			           window.scrollTo(0,coords.y);
			        })
			        .start();
			return false;
		}
	}

	
}