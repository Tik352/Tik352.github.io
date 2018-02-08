function CountMark(){
	var s=location.href;
    var loc = s.substr(s.lastIndexOf("/")+1);
	
	switch(loc){
		case "algebra.html":
			var test_mark = document.getElementById('test1').value * 0.5; // Оценка за первую контрольную
			var hw_mark = document.getElementById('hw1').value * 0.4; // Оценка за КДЗ 2го модуля
			var sem_mark = document.getElementById('sem').value * 0.1; // Оценка за работу на семинарах
			var exam_mark = document.getElementById('exam').value * 0.6; // оценка за экзамен 
			
			var mark1 = test_mark + hw_mark + sem_mark;
			var first_semester = 0.4 * mark1 + exam_mark;
			
			
			document.getElementById('mark').innerHTML = first_semester.toFixed(2) + " ~ " + Math.round(first_semester);			
			break;
		case "matan.html":
			var test_mark = document.getElementById('test1').value * 0.7; // Оценка контрольную
			var hw_mark = document.getElementById('sem').value * 0.3; // оценка за семики
			var exam_mark = document.getElementById('exam').value * 0.7; // оценка за экзамен 
			
			var first_semester = exam_mark + 0.3 * (test_mark + hw_mark);
			
			document.getElementById('mark').innerHTML = first_semester.toFixed(2) + " ~ " + Math.round(first_semester);			
			break;
		case "diskra.html":
			var hw1 = document.getElementById('hw1').value;
			var hw2 = document.getElementById('hw2').value;
			var D12 = (hw1 < hw2) ? ( 0.62 * hw1 + 0.38 * hw2) : ( 0.62 * hw2 + 0.38 * hw1);
			var test1 =  document.getElementById('test1').value;
			var test2 =  document.getElementById('test2').value;
			var test12 = (test1 < test2) ? ( 0.62 * test1 + 0.38 * test2) : ( 0.62 * test2 + 0.38 * test1);
			var current_control = (D12 < test12) ? ( 0.62 * D12 + 0.38 * test12) : ( 0.62 * test12 + 0.38 * D12);
	
			var first_semester = 0.8 * current_control + 0.2 * document.getElementById('coursera').value;
			document.getElementById('mark').innerHTML = first_semester.toFixed(2) + " ~ " + Math.round(first_semester);		
			break;
		case "proga.html":
			var no1 = document.getElementById('test1').value * 0.8  + document.getElementById('current_check1').value * 0.2; // Накоп за 1й модуль
			
			var no2 = document.getElementById('hw').value * 0.35 +  document.getElementById('test2').value * 0.35 + document.getElementById('current_check2').value * 0.3; // накоп за второй модуль
			
			var no =  no1 * 0.2 + no2 * 0.8;
			
			var exam_mark = Math.min(document.getElementById('podbel_test').value, document.getElementById('exam_control_task').value) * 0.8 + Math.max(document.getElementById('podbel_test').value, document.getElementById('exam_control_task').value) * 0.2;
			
			var first_semester = 0.8 * exam_mark + 0.2 * no;
			
			document.getElementById('mark').innerHTML = first_semester.toFixed(2) + " ~ " + Math.round(first_semester);
			break;	
		case "vvpi.html":
			var nacop = document.getElementById('nacop').value * 0.4;
			var exam_mark = document.getElementById('exam').value * 0.6;
			
			var result = nacop + exam_mark;
			document.getElementById('mark').innerHTML = result.toFixed(2) + "~" + Math.round(result);
			break;
	}
}
