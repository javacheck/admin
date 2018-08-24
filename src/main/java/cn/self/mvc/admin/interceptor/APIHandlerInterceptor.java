package cn.self.mvc.admin.interceptor;

import cn.self.mvc.admin.bean.APIResponse;
import cn.self.mvc.admin.cache.CacheService;
import cn.self.mvc.admin.util.JsonUtils;
import jodd.util.Wildcard;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class APIHandlerInterceptor implements HandlerInterceptor {

	private final static Logger logger = LoggerFactory.getLogger(APIHandlerInterceptor.class);

	private CacheService cacheService;

	public APIHandlerInterceptor(CacheService cacheService) {
		super();
		this.cacheService = cacheService;
	}

	private final static String[] ignoreLoginUrls = new String[] { "/api/login*","**/ajax/**", "**/test/**" };

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		String path = request.getRequestURI();
		String contextPath = request.getContextPath();
		if (contextPath.length() > 1) {
			path = path.substring(contextPath.length());
		}
		for (String pattern : ignoreLoginUrls) {
			if (Wildcard.matchPath(path, pattern)) {
				return true;
			}
		}

		String token = request.getParameter("token");
		if (StringUtils.isEmpty(token)){
			Object obj = cacheService.get(token);
			if (obj != null){
				return true;
			}
		}
		logger.debug("api token = {} ,uri = {}", token,request.getRequestURI());
		response.setCharacterEncoding("utf-8");
		response.setContentType("application/json");

		APIResponse apiResponse = new APIResponse();
		apiResponse.set(-100, "请登录");

		response.getWriter().write(JsonUtils.objectToJson(apiResponse));
		response.getWriter().flush();
		response.getWriter().close();
		return false;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

	}
}
