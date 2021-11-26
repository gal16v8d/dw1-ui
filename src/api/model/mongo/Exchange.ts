import PkData from './PkData';

class Exchange extends PkData {
  base: string;
  result: string;
  who: string;

  constructor(data: Exchange) {
    super(data._id);
    this.base = data.base;
    this.result = data.result;
    this.who = data.who;
  }
}

export default Exchange;
