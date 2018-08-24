<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- <!DOCTYPE> 声明必须是 HTML 文档的第一行，位于 <html> 标签之前。指示 web 浏览器关于页面使用哪个 HTML 版本 ( HTML5) -->
<!DOCTYPE>
<html>

<title>登录入口</title>

<head>
	<!-- 设置页面的编码格式 -->
	<meta charset="utf-8" />
	<!-- 设定页面使用的字符集。 -->
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<!-- 显示语言的设定 -->
	<meta http-equiv="content-language" content="zh-CN" />
	<!-- 如果安装了GCF，则使用GCF来渲染页面，如果未安装GCF，则使用最高版本的IE内核进行渲染。 -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- 在HTML中，link元件必须在head元件里，在<head>和</head>之间)。 -->
	<link href="${contextPath }/static/images/favicon.ico" rel="SHORTCUT ICON" />
	<!-- 前端框架CSS样式 -->
	<link href="${contextPath }/static/js/plugins/layui/css/layui.css" rel="stylesheet" type="text/css" media="all" />
	
	<link href="${contextPath }/static/css/modules/login/reset.css" rel="stylesheet" />
	<link href="${contextPath }/static/css/modules/login/radiocheck.css" rel="stylesheet" />
	<link href="${contextPath }/static/css/modules/login/login.css" rel="stylesheet" />
		
	<!-- 导入jquery类库框架 -->
	<script src="${contextPath }/static/js/plugins/jquery/jquery-1.10.2.min.js" type="text/javascript"></script>
	<!-- 导入前端框架 -->
	<script src="${contextPath }/static/js/plugins/layui/layui.js" type="text/javascript"></script>
	
	<script src="${contextPath }/static/js/modules/login/login.js" type="text/javascript"></script>
	<script src="${contextPath }/static/js/modules/login/radiocheck.js" type="text/javascript"></script>
</head>
<script type="text/javascript">
    $(function() {
        $("#_captcha").click(function() {
            $(this).attr("src", "${contextPath }/captcha?" + new Date());
        });
    });
</script>
<body>
<input id="error" name="error" value="${error}"/>
	<div class="wrap">
		<!-- 遮罩层，为了让输入框不那么透明 -->
		<div class="loginfixed"></div>
		<!-- 控制输入框的左右位置 -->
		<div class="wrap-login">
		
			<!-- 趴在登录输入框上的动物  -->
			<div class="people">
				<div class="tou"></div>
				<div id="left-hander" class="initial_left_hand transition"></div>
				<div id="right-hander" class="initial_right_hand transition"></div>
			</div>
					
			<form style="margin-top: 0px;" autocomplete="off" method="post" onsubmit="return validate(this);">
				<div class="login-box">
					<div class="logo">
						<span id="welcomeMsg"></span>
					</div>
					<div class="login clearfix">
						<div class="login-user">
							<i class="icon-user"></i>
							<input id="accoutName" type="text" placeholder="账 号" name="accoutName" value=""/>
						</div>
						<div class="login-pwd">
							<i class="icon-pwd"></i>
							<input id="passWord" type="password" placeholder="密 码" name="passWord"/>
						</div>

						<div class="login-pwd">
							<i class="icon-pwd"></i>
							<input type='text' id="captcha" name="captcha" value='' class='form-control' placeholder='请输入验证码' />
							<img id="_captcha" style="cursor: pointer; margin-top: 5px;" alt="" src="${contextPath }/captcha">
						</div>

						<div>
							<div class="check-box"></div>
							<button type="submit" class="btn btn-block">登 录</button>
						</div>
					</div>
					<div class="error">
						<span id="errorMsg"></span>
					</div>
				</div>
			</form>
		</div>
		
		<!-- 页首(页标首) -->
		<div class="wrap-mod">
			<ul>
				<img src="${contextPath }/static/images/modules/login/logo.png" />
				<div class="divShowTitle">
				| Java程序员编写 欢迎您
				</div>
			</ul>
			<ul class="weather">
				<div style="width:525px;height:120px;overflow:hidden;border:0px">
				</div>
			</ul>
		</div>
		
		<!-- 页脚  -->
		<div class="footer">
			Copyright©2017 Java程序员编写   版权所有 | 建议浏览器：Chrome/360极速/Firefox/Safari/IE9以上
		</div>
	</div>
</body>

</html>