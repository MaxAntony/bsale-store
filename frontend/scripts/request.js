class Request {
  serverUrl = 'http://localhost:5000/api';

  constructor(resource) {
    this.resourceUrl = `${this.serverUrl}/${resource}`;
  }

  async get(path = '') {
    let res = await fetch(`${this.resourceUrl}${path}`, { method: 'GET' });
    let data = await res.json();
    return data;
  }
}

export { Request };
