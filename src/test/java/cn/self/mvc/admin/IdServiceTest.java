//package test;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//
//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(classes = RootConfig.class)
//public class IdServiceTest {
//	@Autowired
//	private IdService idService;
//	@Autowired
//	private JdbcTemplate jdbcTemplate;
//
//	@Test
//	public void test() {
////		DefaultPermission[] values = DefaultPermission.values();
////		for (DefaultPermission dp : values) {
////			int id = dp.ordinal() + 1;
////			String operator = dp.getOperator();
////			String desc = dp.getDesc();
////
////			jdbcTemplate.update(
////					"insert into t_permission(id,operator,`desc`) values(?,?,?)",
////					id, operator, desc);
////		}
//	}
//
//	public static void main(String[] args) {
//		List<Long> list =new ArrayList<Long>();
//		list.add(400L);
//		list.add(800L);
//		//list.add(200L);
//
//		if (list==null||list.size()<=1) {
//			System.out.println();
//			return ;
//		}
//		for (int i = 0; i < list.size(); i++) {
//			String first = "";
//			String tow = "";
//			String end = "";
//			for (int j = 0; j < list.size(); j++) {
//				if (i==j) {
//				}else {
//					Long l = list.get(j);
//					if (list.size()==2) {
//						first=l+"-*";
//						tow="*-"+l+"-*";
//						end="*-"+l;
//					}else {
//
//					}
//				}
//			}
//			System.out.println(""+first+"       "+tow+"       "+end);
//		}
//	}
//}
