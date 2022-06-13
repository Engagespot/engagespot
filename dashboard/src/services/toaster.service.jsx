import { notification } from 'antd';

// const
export class Toaster {
  _title = 'Alert';
  _type = 'open'; // 'success' | 'info' | 'warning' | 'error'
  _description;
  _duration = 3;
  constructor(type) {
    this._type = type;
  }
  set duration(time) {
    this._duration = time;
  }
  set title(msg) {
    this._title = msg;
  }
  set message(desc) {
    this._description = desc;
  }
  open() {
    return new Promise(resolve => {
      notification[this._type]({
        message: this._title,
        description: this._description,
        duration: this._duration,
        className: 'growcoms-toater ' + this._type,
        onClick: () => {
          resolve(null);
        },
      });
    });
  }
}

// export default Toaster
