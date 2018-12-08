// Temp mock data until server
import ChatData1 from '../data/mock-chat1.json';
import ChatData2 from '../data/mock-chat2.json';

/**
 * API call to get or change something..
 */
export default class ChatService {
  constructor() {
    this.host = '';
    this.apiPath = '/api/chat';
  }

  getChat(chatId = parseInt(chatId)) {
    const chatIdNum = parseInt(chatId);
    const url = `${this.host}${this.apiPath}/${chatIdNum}`;
    let chatData = null;

    switch (chatIdNum) {
      case 1:
        chatData = ChatData1;
        break;
      case 2:
        chatData = ChatData2;
    }

    return fetch(url)
      .then(response => {
        if (response.ok) {
          // TODO real server response
          return Promise.resolve(chatData);
        }

        // TODO real server response
        // Promise.reject(response.json());
        return Promise.resolve({
          message: "Some kind of error"
        });
      });
    // TODO but probably a global catch all
    // .catch(error => {
    //   console.log(error);
    // });
  }
}
