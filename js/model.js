window.Model=function(tableName){
	return {
		configAV:function(){
			var APP_ID = 'WRSxH1rrGlwcBHWBmwvY2OAt-gzGzoHsz';
			var APP_KEY = 'FhswBU2MCL8lNpb626QNhSDu';
			AV.init({
			  appId: APP_ID,
			  appKey: APP_KEY
			});		
		},
		table:AV.Object.extend(tableName),
		fetchMsgs:function(){
			return new AV.Query(tableName).find(); //返回一个 Promise 对象
		},
		createMsg:function(options){
			var tableRow = new this.table();
			return tableRow.save(options) //返回一个 Promise 对象
		}
	}
}