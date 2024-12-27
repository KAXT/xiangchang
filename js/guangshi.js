/**
 * Created by Bear某 on 2017/12/23
 */ 

 $(function () { 
	$("input").blur(function(){
		set();
	});
	$("#button").click(function(){
		set();
	});
	$("input").focus(function(){
		 $(this).select();
	});
	$('#back').click(function(){
		$(location).attr('href', 'index.html');
	});	
});

function set() {
	var rou =parseFloat($('#how').val())*500;
	if(isNaN(rou)){
		return $("#how").val('请输入').select();
		//rewrite();
    }
	var feirou=rou *0.3;
	var shourou=rou *0.7;
	if($('#how').val().indexOf('斤')==-1){
		$('#how').val( $('#how').val() +'斤');
	};	
	//$('#biaoti').html( rou +'g肉肉制作香肠配料表');
	$('#shourou').val('瘦肉'+ (toDecimal(shourou))+'g，    肥肉' + toDecimal(feirou)+'g');
	$('#feirou').val( rou *0.3+'g');
	$('#jiangyou').val('生抽'+ rou *0.028+'ml');
	$('#baitang').val('白糖'+ rou *0.06+'g');
	$('#jiu').val('酒'+ rou *0.04+'ml');
	$('#yan').val('盐'+ rou *0.02+'g');
	$('#water').val('水'+ rou *0.15+'ml');
	$('#hujiao').val('胡椒'+ rou *0.003+'g');
};

function toDecimal(x) { 
      var f = parseFloat(x); 
      if (isNaN(f)) { 
        return; 
      } 
      f = Math.round(x*100)/100; 
      return f; 
}