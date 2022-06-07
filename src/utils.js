export const tabs = {
  1: "进行中",
  2: "未开始",
  3: "已结束",
};

function getTimeDifference(time1, time2) {
  var diffTime = Math.round(Math.abs(time1.getTime() - time2.getTime()) / 1000);
  var day = parseInt(diffTime / (60 * 60 * 24));
  var hours = parseInt((diffTime % (60 * 60 * 24)) / (60 * 60));
  var minutes = parseInt((diffTime % (60 * 60)) / 60);
  var seconds = diffTime % 60;
  
  if(JSON.stringify(time1.getTime() - time2.getTime()).includes('-')){
  // 包含符号就是还没超过日期
    return {
      day: day,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
 
  return '已到期'
}

export function timer(date) {
  var time1 = new Date(); //现在的日期
  var time2 = new Date(date); //目标日期
  var res = getTimeDifference(time1, time2);
  return res
}
