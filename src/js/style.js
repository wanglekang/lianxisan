;
window.onload=function(){
	var tds=document.querySelectorAll("td");
	var add=document.querySelector(".add");
	var answer=document.querySelector(".answer");
	var reduce=document.querySelector(".reduce");
	var ride=document.querySelector(".ride");
	var dive=document.querySelector(".dive");
	var success=document.querySelector(".success");
	var dele=document.querySelector(".delete");
	
    tds.forEach(function(items,i){
		items.addEventListener('tap',function(){
			if(items.className=="delete"){
				answer.innerText--;
			}else if(items.className=="add"){
				
				success.addEventListener('tap',function(){
					answer.innerText=Number(answer.innerText);
				})
			}
			var val=this.innerHTML;
			answer.innerText+=val;
		},false);
	})
}