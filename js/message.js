let view=document.querySelector('.messages');
let model={
	messageTable:AV.Object.extend('Messages'),
	fetchMsgs:function(){
		return new AV.Query('Messages').find(); //返回一个 Promise 对象
	},
	createMsg:function(name,words){
		var messageRow = new this.messageTable();
		return messageRow.save({ //返回一个 Promise 对象
			name:name,
		 	words: words
		})
	}
}
let controller={
	view:null,
	model:null,
	init:function(view,model){
		this.view=view;
		this.model=model;
		this.oForm=view.querySelector('#messageForm');
		this.oUl=view.querySelector('.messages .showMessages');
		this.configAV(); 
		this.showAllMessages(); 
		this.bindEvents();
	}, 
	configAV:function(){
		var APP_ID = 'WRSxH1rrGlwcBHWBmwvY2OAt-gzGzoHsz';
		var APP_KEY = 'FhswBU2MCL8lNpb626QNhSDu';
		AV.init({
		  appId: APP_ID,
		  appKey: APP_KEY
		});		
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
		this.model.createMsg(this.oForm.who.value,this.oForm.words.value).then((object)=>{
			  let oLi=document.createElement('li');
			  oLi.textContent=`${object.attributes.name}: ${object.attributes.words}`;
			  this.oUl.insertBefore(oLi,this.oUl.children[0]);
		});
		this.oForm.words.value='';
	}
}

controller.init(view,model);