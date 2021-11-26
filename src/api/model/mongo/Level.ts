import PkData from './PkData';

class Level extends PkData {
  name: string;

  constructor(data: Level) {
    super(data._id);
    this.name = data.name;
  }
}

export default Level;
