!function(){
	let view=View('.messages');
	let model=Model('Messages');

	let options={
		init:function(){
			this.oForm=this.view.querySelector('#messageForm');
			this.oUl=this.view.querySelector('.messages .showMessages');
			this.model.configAV();
			this.showAllMessages(); 
			this.bindEvents();
		},
		showAllMessages:function(){
			this.model.fetchMsgs().then((messages)=>{
					let msgArr=messages.map((item)=>item.attributes);
					msgArr.forEach((item)=>{
						let oLi=document.createElement('li');
						oLi.textContent=`${item.name}: ${item.words}`;
						this.oUl.insertBefore(oLi,this.oUl.children[0]);
					});			
			})
		},
		bindEvents:function(){
			this.oForm.addEventListener('submit',function(ev){
				ev.preventDefault();
				this.saveAndShowMsg(); 
			}.bind(this));
		},
		saveAndShowMsg:function(){
			let options={};
			options.name=this.oForm.who.value;
			options.words=this.oForm.words.value;
			this.model.createMsg(options).then((object)=>{
				  let oLi=document.createElement('li');
				  oLi.textContent=`${object.attributes.name}: ${object.attributes.words}`;
				  this.oUl.insertBefore(oLi,this.oUl.children[0]);
			});
			this.oForm.words.value='';
		}
	}
	let controller=Controller(view,model,options);
	controller.init();
}.call()