package cn.self.mvc.admin.cache;

import java.io.Serializable;

public interface CacheService {
	/**
	 * 保存到缓存
	 * @param key
	 * @param value
	 * @param liveSeconds 秒数
	 */
	void set(String key, Object value, Long liveSeconds);

	void set(String key, Object value);

	Object get(String key);

	void delete(String key);

	Long getExpire(String key);

	Boolean expire(String key, Long liveSeconds);

	Boolean hasKey(String key);

	/**
	 * 保存到hash表
	 * @param key redis中key
	 * @param hashKey hash表中可以
	 * @param value
	 */
	void setToHash(String key, Object hashKey, Object value);

	Object getFromHash(String key, Object hashKey);

	Boolean hasHashKey(String key, Object hashKey);

	Long hashSize(String key);

	void deleteFromHash(String key, Object... hashKeys);

	Long increment(String key, Long value);

	Long increment(String key);

	void sendMessage(String channel, Serializable message);
}
