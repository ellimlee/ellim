$(document).ready(function(){  		
	$('article').on('mouseover',function(){
		$(this).stop().animate({width:'35%'},1000,function(){
			//article이 넓어진 바로 후에 아래구문이 실행됨
			$(this).find('h3').stop().animate({right:10},400);
			$(this).find('p').stop().animate({right:10},800);
		});
		$(this).find('video').stop().animate({opacity:0.9},1200);
		var vid=$(this).find('video').get(0); //변수 vid에 video파일 참조
	/*
		get()메서드는 선택기에서 지정한 DOM요소를 가져옴
			$(selector).get(index);
		$('li').get(0); //첫번째 li를 가져옴
		$('li').get(3); //네번째 li를 가져옴
		$('li').get(-2); //끝에서 두번째 li를 가져옴
	*/
		
		vid.currentTime=8;
		//동영상을 재생 / 동영상의 재생위치를 처음(0)이나 지정한(8초)로 설정
		//currentTime 속성은 오디오,비디오 재생의 현재위치(초)를 설정하거나 반환함 설정시 재생이 지정된 위치로 점프됨
		vid.play();
	});
	//마우스 아웃시
	$('article').on('mouseout',function(){
		var vid=$(this).find('video').get(0);
		vid.pause(); //동영상 정지
		
		$(this).stop().animate({width:'12%'},700);
		$(this).find('video').stop().animate({opacity:0},2000);
		$(this).find('h3').stop().animate({right:-310},200);
		$(this).find('p').stop().animate({right:-310},500);
	});
});















