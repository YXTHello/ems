$(function(){


	var numArr=[];
	var totalPage;
	var currentPage=1;
	var total;
	$("button").click(function(){
		var num = $("#num").val();
		total = num;
		totalpage = Math.ceil(num/10);
		for (var i = 0; i <=num; i++) {
			numArr.push(i);
		}
		loadData();
	})
})
function loadData(){

	var $content = $(".content");
	var startNum = (currentPage-1)*10+1;
	var endNum = currentPage*10>total ? total:currentPage*10;
	for (var i=startNum; i<=endNum; i++){
		if (i%10==5) {
			var $span = $("<span>"+i+"</span></br>")
			$span.appendTo($content);
		}else{
			var $span = $("<span>"+i+"</span>");
			$span.appendTo($content);
		}
	}
}