package cn.self.mvc.admin.controller;

import cn.self.mvc.admin.bean.Account;
import cn.self.mvc.admin.constant.Constants;
import cn.self.mvc.admin.service.AccountService;
import cn.self.mvc.admin.service.PermissionService;
import cn.self.mvc.admin.service.RoleService;
import cn.self.mvc.admin.util.PasswordUtils;
import cn.self.mvc.admin.util.SecurityUtils;
import cn.self.mvc.admin.util.WebUtils;
import jodd.util.StringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SecurityController {
	private final static Logger logger = LoggerFactory.getLogger(SecurityController.class);
	@Autowired
	private AccountService accountService;
	@Autowired
	private RoleService roleService;
	@Autowired
	private PermissionService permissionService;

	@RequestMapping("update-password")
	@ResponseBody
	public String updatePassword(String password, String oldPassword) {
		Account account = SecurityUtils.getAccount();
		if (!PasswordUtils.checkPassword(oldPassword, account.getPassword())) {
			// 旧密码不对
			return "2";
		}
		account.setPassword(PasswordUtils.encryptPassword(password));
		accountService.updatePassword(account.getPassword(), account.getId());

		WebUtils.setAttributeToSession(Constants.ACCOUNT_SESSION_KEY, account);
		return "1";
	}

	@RequestMapping("logout")
	public String logout() {
		WebUtils.getSession().invalidate();
		return "redirect:/login";
	}

	@RequestMapping(value = "login", method = RequestMethod.GET)
	public String login() {
		System.out.println("哈哈哈");
		return "login";
	}

	@RequestMapping(value = "login", method = RequestMethod.POST)
	public String login(String accoutName, String passWord, String captcha, Model model) {
		String text = (String) WebUtils.getAttributeFromSession(com.google.code.kaptcha.Constants.KAPTCHA_SESSION_KEY);
		if (StringUtil.isBlank(captcha) || !captcha.equalsIgnoreCase(text)) {
			model.addAttribute("error", "验证码不对");
			return "login";
		}
		Account account = accountService.login(accoutName, passWord);
		if (account == null) {
			model.addAttribute("error", "用户名或者密码不对");
			return "login";
		}
		loginSuccess(account);
		return "redirect:/";
	}

	private void loginSuccess(Account account) {
		// 帐号信息
		WebUtils.setAttributeToSession(Constants.ACCOUNT_SESSION_KEY, account);
		// 拥有的角色
		WebUtils.setAttributeToSession(Constants.ROLE_SESSION_KEY, roleService.findByAccountId(account.getId()));
		// 拥有的权限
		WebUtils.setAttributeToSession(Constants.PERMISSION_SESSION_KEY, permissionService.findByAccountId(account.getId()));
	}

}
