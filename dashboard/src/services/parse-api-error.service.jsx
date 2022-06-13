import { Toaster } from './toaster.service';

export class ParseError {
  error;
  _data;
  constructor(err) {
    this.error = err;
  }
  get data() {
    return this._data;
  }
  show() {
    let _error = JSON.parse(this.error.message);
    const { message, error, statusCode } = _error.data;
    this._data = { message, error, statusCode };
    if (Array.isArray(message)) {
      for (let msg of message) {
        const toaster = new Toaster('error');
        toaster.title = 'Error';
        toaster.message = msg;
        toaster.open();
      }
    } else if (typeof message === 'string') {
      const toaster = new Toaster('error');
      toaster.title = 'Error';
      toaster.message = message;
      toaster.open();
    } else {
      const toaster = new Toaster('error');
      toaster.title = 'Error';
      toaster.message = 'Something went wrong';
      toaster.open();
    }
  }
}
