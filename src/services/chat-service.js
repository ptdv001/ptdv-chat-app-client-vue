import { api } from '../config.json';

/**
 * API call to get or change something..
 */
export default class ChatService {
  constructor() {
    this.host = api.host;
    this.apiPath = api.path + '/chats';
  }

  getChat(chatId = parseInt(chatId)) {
    const chatIdNum = parseInt(chatId);
    const url = `${this.host}/${this.apiPath}/${chatIdNum}`;

    return fetch(url)
      .then(response => {
        if (response.ok) {
          // TODO real server response
          return Promise.resolve(response.json());
        }

        Promise.reject(response.json());
      })
      // TODO but probably a global catch all
      .catch(error => {
        alert(error); //TODO something better :)
      });
  }
}
