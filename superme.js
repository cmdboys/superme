var rep = document.querySelectorAll('.pinned-repo-item') // 仓库列表
var nav = document.querySelectorAll('.UnderlineNav-item') // 数据
var svg = document.querySelectorAll('.js-calendar-graph-svg') // 提交数据

var startSvg = '<svg aria-label="stars" class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>'
var forkSvg = '<svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>'

var config = {
	rep: {
		start: { // 星星的范围
			'1': [300, 999],
			'2': [10, 1400],
			random: 0.65 //概率
		},
		fork: { // fork范围
			'1': [100, 600],
			'2': [10, 300],
			random: 0.4
		}
	}
}

function repMake(){
	
}


function random (lowValue,highValue){
	var choice=highValue-lowValue+1;
	return Math.floor(Math.random()*choice+lowValue);
}

function repMWorker(){
	/*
		两种展示方式, start > 1000 == k || num 
	*/

	// do start
	for(var i=0; i<rep.length; i++){
		var target = rep[i].querySelectorAll('.pinned-repo-meta.muted-link')
		var startShowModle = Math.random() > config.rep.start.random ? 1 : 2
		var forkShowModle = Math.random() > config.rep.fork.random ? 1 : 2

		var start = 0;
		var fork = 0;

		var startRange = config.rep.start[startShowModle]
		var forkRange = config.rep.fork[startShowModle]

		start = random(startRange[0], startRange[1])
		fork = random(forkRange[0], forkRange[1])

		if(startShowModle == 2){
			start = start / 10 + 'k'
		}

		if(forkShowModle == 2){
			fork = fork / 10 + 'k'
		}

		target[0].innerHTML = startSvg + ' '+start
		target[1].innerHTML = forkSvg + ' '+fork
	}


}



repMWorker()
