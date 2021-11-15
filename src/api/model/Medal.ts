import PkData from './mongo/PkData';

class Medal extends PkData {
  number: number;
  name: string;
  description: string;

  constructor(data: Medal) {
    super(data._id);
    this.number = data.number;
    this.name = data.name;
    this.description = data.description;
  }
}

export default Medal;
