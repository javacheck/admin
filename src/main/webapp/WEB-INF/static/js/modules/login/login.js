$(function(){
	//radio,checkbox
	$('.check-box input').iCheck({
		checkboxClass: 'icheckbox-blue',
		radioClass: 'iradio-blue',
		increaseArea: '20%'
	});
    errorMsg();
	welcomeMsg();
    changeBackground();

    $('#passWord').on('focus', function () {
        $('#left-hander').removeClass('initial_left_hand').addClass('left_hand');
        $('#right-hander').removeClass('initial_right_hand').addClass('right_hand')
    }).on('blur', function () {
        $('#left-hander').addClass('initial_left_hand').removeClass('left_hand');
        $('#right-hander').addClass('initial_right_hand').removeClass('right_hand')
    });
	
});
layui.use(["layer"],function(){var layer = layui.layer;});
var validate = function validate(){

    var accoutName = $.trim($("#accoutName").val());
    var passWord = $.trim($("#passWord").val());
    var captcha = $.trim($("#captcha").val());

		if(accoutName == ""){
        layer.tips("用户名不能为空!","#accoutName", {tips: [2, '#555']});
        return false;
    }
    else if(passWord == ""){
        layer.tips("密码不能为空!","#passWord", {tips: [2, '#555']});
        return false;
    } else if (captcha==""){
            layer.tips("验证码不能为空!","#captcha", {tips: [2, '#555']});
            return false;
        }
    return;   
}
var errorMsg = function errorMsg(){
    var error = $.trim($("#error").val());
    if(error != null && error != ""){
        $("#errorMsg").html(error);
    }
}

   
document.onkeydown=function(e){
    var currKey=0,e=e||event;
    currKey=e.keyCode||e.which||e.charCode;//支持IE、FF
    if(currKey==13) {
        $(".btn btn-block").trigger("click");
    }
}

var welcomeMsg = function welcomeMsg(){
	now = new Date(),hour = now.getHours();
	if(hour == 23 || hour < 6){$("#welcomeMsg").html("别熬夜了，该睡觉了！");}
    else if(hour < 9){$("#welcomeMsg").html("早上好，开始美好的一天！");}
    else if(hour < 12){$("#welcomeMsg").html("上午好，加油工作！");}
	else if(hour < 13){$("#welcomeMsg").html("中午好，吃好休息好！");}
	else if(hour < 18){$("#welcomeMsg").html("下午好，继续努力工作！");}
	else if(hour < 23){$("#welcomeMsg").html("晚上好，放松心情！");}
}

var changeBackground = function changeBackground(){
    var localpath = '/admin/static/images/modules/login/background/';
    var festivals={
        '2017/5/24': localpath+'5.5.jpg',//端午
        '2017/5/25': localpath+'5.5_.jpg',//端午
        '2017/5/26': localpath+'5.5.jpg',//端午
        '2017/5/27': localpath+'5.5_.jpg',//端午
        '2017/5/28': localpath+'5.5.jpg',//端午
        '2017/5/29': localpath+'5.5_.jpg',//端午
        '2017/5/30': localpath+'5.5.jpg',//端午
        '2017/6/5': localpath+'6.5.jpeg',//环境日
        '2017/6/21': localpath+'xiazhi.jpg',//夏至
        '2017/7/1': localpath+'7.1.jpg',//建党节
        '2017/7/7': localpath+'xiaoshu.jpg',//小暑
        '2017/7/22': localpath+'dashu.jpg',//大暑
        '2017/8/1': localpath+'8.1.jpg',//建军节
        '2017/8/7': localpath+'liqiu.jpg',//立秋
        '2017/8/23': localpath+'chushu.jpg',//处暑
        '2017/9/7': localpath+'bailu.jpg',//白露
        '2017/9/10': localpath+'9.10.jpg',//教师节
        '2017/9/23': localpath+'qiufen.jpg',//秋分
        '2017/9/26': localpath+'10.1.jpg',//国庆
        '2017/9/27': localpath+'zhongqiu.jpg',//中秋
        '2017/9/28': localpath+'10.1.jpg',//国庆
        '2017/9/29': localpath+'10.1.jpg',//国庆
        '2017/9/30': localpath+'zhongqiu.jpg',//中秋
        '2017/10/1': localpath+'10.1.1.jpg',//国庆
        '2017/10/2': localpath+'10.1.1.jpg',//国庆
        '2017/10/3': localpath+'10.1.1.jpg',//国庆
        '2017/10/4': localpath+'zhongqiu.jpg',//中秋
        '2017/10/5': localpath+'10.1.2.jpg',//国庆
        '2017/10/6': localpath+'10.1.2.jpg',//国庆
        '2017/10/7': localpath+'10.1.2.jpg',//国庆
        '2017/10/8': localpath+'hanlu.jpg',//寒露
        '2017/10/23': localpath+'shuangjiang.jpg',//霜降
        '2017/10/28': localpath+'chongyang.jpg',//重阳
        '2017/10/31': 'http://pic1.win4000.com/wallpaper/0/585a3631d1d7c.jpg',//万圣节
        '2017/11/7': localpath+'lidong.jpg',//立冬
        '2017/11/22': localpath+'xiaoxue.jpg',//小雪
        '2017/12/7': localpath+'daxue.jpg',//大雪
        '2017/12/22': localpath+'dongzhi.jpg',//冬至
        '2017/12/23': localpath+'christmas.jpg',//圣诞节
        '2017/12/24': localpath+'christmas.jpg',//圣诞节
        '2017/12/25': localpath+'christmas.jpg',//圣诞节
        '2017/12/28': localpath+'1.1.jpg',//元旦
        '2017/12/29': localpath+'1.1.jpg',//元旦
        '2017/12/30': localpath+'1.1.jpg',//元旦
        '2018/1/1': localpath+'1.1.jpg',//元旦
    };
    now = new Date(),hour = now.getHours();
    var background = festivals[now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate()];
    if(background == undefined){
        if(hour >=7 && hour <=11){
            background = localpath+'morning2.jpg';
        }else if(hour >=12 && hour <=17){
            background = localpath+'wrapbg_suzhou.jpg';
        }else {
            background = localpath+'evening2.jpg';
        }
    }
    $('.wrap').css('background-image', 'url('+background+')');
}
