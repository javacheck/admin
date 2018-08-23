package cn.self.mvc.admin.util;

import org.jasypt.util.password.StrongPasswordEncryptor;

public final class PasswordUtils {
	public static String encryptPassword(String password) {
		return new StrongPasswordEncryptor().encryptPassword(password);
	}

	public static boolean checkPassword(String plainPassword,
			String encryptedPassword) {
		return new StrongPasswordEncryptor().checkPassword(plainPassword,
				encryptedPassword);
	}
}
