(function($, doc) {
	
	$.init();
	$.ready(function() {
	
		var _getParam = function(obj, param) {
			return obj[param] || '';
		};
		//普通示例
		var userPicker = new $.PopPicker();
		userPicker.setData([ {
			value: 'zhz',
			text: '年'
		}, {
			value: 'gezh', 
			text: '月'
		}]);
		var nian=document.querySelector(".nian");
		var mons=document.querySelector(".mons");

		var btns = document.getElementById("demo6");
		var showUserPickerButton = doc.getElementById('showUserPicker');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				nian.innerText = (items[0]).text;
				if(nian.innerText==="年"){
					var _self=btns;
					var optionsJson = btns.getAttribute('data-options') || '{}';
					var options = JSON.parse(optionsJson);
					var id = btns.getAttribute('id');
					
					_self.picker = new $.DtPicker(options);
					_self.picker.show(function(rs) {
 				
							mons.innerText = rs.text.slice(0,4);

						_self.picker.dispose();
						_self.picker = null;
						});
					
				}else{
					var _self=btns;
					var optionsJson = btns.getAttribute('data-options') || '{}';
					var options = JSON.parse(optionsJson);
					var id = btns.getAttribute('id');
					
					_self.picker = new $.DtPicker(options);
					_self.picker.show(function(rs) {
							mons.innerText = rs.text;
							// mons.innerText = rs.text;
						_self.picker.dispose();
						_self.picker = null;
						});
				}
			});
		}, false);
		
	});
	
})(mui, document);