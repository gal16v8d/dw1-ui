import PkData from './PkData';

class Status extends PkData {
  name: string;
  description: string;

  constructor(data: Status) {
    super(data._id);
    this.name = data.name;
    this.description = data.description;
  }
}

export default Status;
