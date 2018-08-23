package cn.self.mvc.admin;

import cn.self.mvc.admin.bean.Permission;
import cn.self.mvc.admin.config.RootConfig;
import cn.self.mvc.admin.service.IdService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = RootConfig.class)
public class AdminApplicationTests {

	@Autowired
	private IdService idService;
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Test
	public void test(){
		Permission.DefaultPermission[] values = Permission.DefaultPermission.values();
		for (Permission.DefaultPermission dp : values) {
			int id = dp.ordinal() + 1;
			String operator = dp.getOperator();
			String desc = dp.getDesc();

			jdbcTemplate.update(
					"insert into t_permission(id,operator,`desc`) values(?,?,?)",
					id, operator, desc);
		}
	}

	@Test
	public void contextLoads() {
	}

}
