


import config from '../config/normal.config'
import domConfig from '../config/base.config'
import  { random, repMake } from './util/util'


var rep = document.querySelectorAll(domConfig.className.rep) // 仓库列表
var svg = document.querySelector(domConfig.className.svg) // 提交数据
var startSvg = domConfig.icon.start
var forkSvg = domConfig.icon.fork


function repWorker(){
	/*
		两种展示方式, start > 1000 == k || num 
	*/

	// do start
	for(var i=0; i<rep.length; i++){
		var target = rep[i].querySelectorAll(domConfig.className.repMeta)
		var targetContent = rep[i].querySelector(domConfig.className.repGray)

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

		if(!target[0]){
			targetContent.innerHTML += repMake(startSvg + ' '+start)
		}else{
			target[0].innerHTML = startSvg + ' '+start
		}

		if(!target[1]){
			targetContent.innerHTML += repMake(forkSvg + ' '+fork)
		}else{
			target[1].innerHTML = forkSvg + ' '+fork
		}

	}
}

function navWorkder(){
	var goc = document.querySelector(domConfig.className.nav)
	var eq = goc.querySelectorAll(domConfig.className.navItem)[3]
	var follow = eq.querySelector(domConfig.className.navContent)

	follow.innerHTML = random(config.follow[0], config.follow[1]) / 10 + 'k'
}

function svgWorker(){
	var list = svg.querySelectorAll('rect')
	list.forEach(function(value){
		var color = ''

		if(Math.random() < config.fill.random){
			color = config.fill.color.normal
		}else{
			color = config.fill.color.sp[random(0, config.fill.color.sp.length-1)]
		}
		value.setAttribute('fill', color)
	})
}

repWorker()
navWorkder()
svgWorker()