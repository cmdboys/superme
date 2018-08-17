function repMake(html){
  return '<a href="" class="pinned-repo-meta muted-link">' + html + '</a>'
}

function random (lowValue,highValue){
  var choice=highValue-lowValue+1;
  return Math.floor(Math.random()*choice+lowValue);
}

export {
  repMake,
  random
}