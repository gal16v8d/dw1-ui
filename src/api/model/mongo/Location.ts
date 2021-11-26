import PkData from './PkData';

class Location extends PkData {
  name: string;

  constructor(data: Location) {
    super(data._id);
    this.name = data.name;
  }
}

export default Location;
