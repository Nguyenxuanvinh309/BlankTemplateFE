$(document).ready(function(){
	PlayVideo();
	ResizeVideo();
	ResizeAction();
});

var videoStatus = true;
function PlayVideo(){
	var playBtn = $('.play-video');
	var stopBtn = $('.stop-video');
	var screenVideo = $('.screen-video');

	if(playBtn.length > 0){
		playBtn.click(function(){
			if(screenVideo.length > 0){
				screenVideo[0].play();

				$(this).css('display','none');
				stopBtn.css('display','table');
			}
		});

		stopBtn.click(function(){
			if(screenVideo.length > 0){
				screenVideo[0].pause();

				$(this).css('display','none');
				playBtn.css('display','table');
			}
		});
	}
}

function ResizeAction(){
	$(window).resize(function(){
		ResizeVideo();
	});
}

function ResizeVideo(){
	var playBtn = $('.play-video');
	var stopBtn = $('.stop-video');
	var screenVideo = $('.screen-video');
	var leftBtnPos = ((screenVideo.width() - playBtn.width())/2) + 'px';
	var topBtnPos = ((screenVideo.height() - playBtn.height())/2) + 'px';

	playBtn.css('left',leftBtnPos);
	stopBtn.css('left',leftBtnPos);
	playBtn.css('top',topBtnPos);
	stopBtn.css('top',topBtnPos);
}