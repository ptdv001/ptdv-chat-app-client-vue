
/**
 * API call to get or change something..
 */
export default class ExampleAPIService {
  constructor() {
    this.host = '';
    this.apiPath = '/api/example';
  }

  getExample(exampleId) {
    const url = `${this.host}${this.apiPath}/${exampleId}`;

    // TODO
    // a managed fetch tied into authentication
    return fetch(url)
      .then(response => {
        if (response.ok) {
          // TODO real server response
          // return Promise.resolve(response);
          return Promise.resolve({
            message: "Such great example data here!"
          });
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
