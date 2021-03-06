function CountMark(){
	var s=location.href;
    var loc = s.substr(s.lastIndexOf("/")+1);
	
	switch(loc){
		case "algebra.html":
			var test_mark = Math.round (document.getElementById('test3').value * 0.35); 
			var hw_mark = Math.round(document.getElementById('hw3').value * 0.13); 
			var sem_mark = Math.round(document.getElementById('sem').value * 0.12); 
			var colloc = Math.round(document.getElementById('colloc').value * 0.4);
			var exam_mark =Math.round( document.getElementById('exam').value * 0.3); 
			
			var mark1 = test_mark + hw_mark + sem_mark + colloc;
			var first_semester = Math.round(0.7 * mark1) + Math.round(exam_mark);
			
			console.log(0.7*mark1);
			
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
			var hw3 = document.getElementById('hw3').value;
			var hw4 = document.getElementById('hw4').value; 
			var D34 = (hw3 < hw4) ? ( 0.62 * hw3 + 0.38 * hw4) : ( 0.62 * hw3 + 0.38 * hw4);
			var test3 =  document.getElementById('test3').value;
			var test4 =  document.getElementById('test4').value;
			var test34 = (test3 < test4) ? ( 0.62 * test3 + 0.38 * test4) : ( 0.62 * test3 + 0.38 * test4);
			var current_control = (D34 < test34) ? ( 0.62 * D34 + 0.38 * test34) : ( 0.62 * test34 + 0.38 * D34);
	
			var first_semester = 0.8 * current_control + 0.2 * document.getElementById('M34').value;
			document.getElementById('mark').innerHTML = first_semester.toFixed(2) + " ~ " + Math.round(first_semester);		
			break;
		case "proga.html":
			var no1 = document.getElementById('hw').value * 0.5 + document.getElementById('current_check1').value * 0.5; // Накоп за 3й модуль
			
			var no2 = document.getElementById('test2').value * 0.8 + document.getElementById('current_check2').value * 0.2; // накоп за 4 модуль
			// ПИДАРАСЫ
			var no =  no1 * 0.2 + no2 * 0.8;
			// ОХУЕННЫЙ МИН МАКС АЩАЩА БЛЯТЬ
			var exam_mark = Math.min(document.getElementById('podbel_test').value, document.getElementById('exam_control_task').value) * 0.8 + Math.max(document.getElementById('podbel_test').value, document.getElementById('exam_control_task').value) * 0.2;
			
			var first_semester = 0.8 * Math.round(exam_mark) + 0.2 * Math.round(no);
			
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
