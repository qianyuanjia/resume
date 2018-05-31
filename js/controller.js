window.Controller=function(view,model,options){
	let controller={
		view:null,
		model:null,
		init:function(view,model){
			this.view=view;
			this.model=model;
		} 
	}
	for(let key in options){
		if(key !== 'init'){
			controller[key]=options[key];
		}else{
			controller.init=function(){
				this.view=view;
				this.model=model;
				options.init.call(this);
			}
		}
	}
	return controller;
}