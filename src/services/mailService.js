import axios from "axios";

// Создаем экземпляр axios с базовыми настройками
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5050",
  headers: {
    "Content-Type": "application/json",
  },
  // Если ваш сервер использует самоподписанные сертификаты, возможно потребуется
  // отключить проверку SSL (только для разработки!)
  // httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

class MailService {
  /**
   * Отправка заявки на почту
   * @param {Object} data - Данные формы
   * @param {string} data.name - Имя
   * @param {string} data.phone - Телефон
   * @param {string} data.message - Сообщение
   * @returns {Promise<Object>} - Ответ сервера
   */
  static async sendMail(data) {
    try {
      const response = await apiClient.post("/mail/send", data);
      return response.data;
    } catch (error) {
      console.error("Ошибка при отправке заявки:", error);
      throw this.handleError(error);
    }
  }

  /**
   * Обработка ошибок
   * @param {Error} error - Ошибка
   * @returns {Object} - Стандартизированный объект ошибки
   */
  static handleError(error) {
    if (error.response) {
      // Сервер ответил с кодом ошибки
      return {
        message: error.response.data?.message || "Ошибка сервера",
        status: error.response.status,
        data: error.response.data,
      };
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      return {
        message: "Нет ответа от сервера. Проверьте подключение к интернету.",
        status: 0,
      };
    } else {
      // Ошибка при настройке запроса
      return {
        message: error.message || "Произошла неизвестная ошибка",
        status: -1,
      };
    }
  }
}

export default MailService;
