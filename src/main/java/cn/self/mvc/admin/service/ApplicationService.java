package cn.self.mvc.admin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Service
public class ApplicationService {
	//所有需要权限验证的url
	public final static List<String> ALLPERMISSIONURL = new ArrayList<String>();

	@Autowired
	private PermissionService permissionService;

	@PostConstruct
	private void init() {
		ALLPERMISSIONURL.clear();
		ALLPERMISSIONURL.addAll(permissionService.findAllUrl());
	}
}
