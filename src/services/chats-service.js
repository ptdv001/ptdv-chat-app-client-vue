import { api } from '../config.json';

/**
 * API call to get or change Chat Rooms
 */
export default class ChatsService {
  constructor() {
    this.host = api.host;
    this.apiPath = api.path + '/chats';
  }

  getChats() {
    const url = `${this.host}/${this.apiPath}`;

    return fetch(url)
      .then(response => {
        if (response.ok) {
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
