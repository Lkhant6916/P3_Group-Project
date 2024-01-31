function updateTime () {
    var date = new Date();
    var time = date.toLocaleString('en-SG');
    document.getElementById('time').innerHTML = time;
}
setInterval(updateTime, 1000);
updateTime();
