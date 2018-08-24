package cn.self.mvc.admin.service;

import java.io.InputStream;
import java.io.OutputStream;

public interface FileService {
	/**
	 * 指定id的保存
	 * @param in
	 * @param id
	 * @return
	 */
	String save(InputStream in, String id);
	
	String save(InputStream in);

	InputStream get(String id);

	void write(String id, OutputStream out);

	void delete(String id);

	String getFileServer();

	String getPrefix();
}
