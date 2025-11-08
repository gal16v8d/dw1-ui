import Location from './Location';
import PkData from './PkData';

class GymMachine extends PkData {
  name: string;
  location: Location;
  train: Array<string>;

  constructor(data: GymMachine) {
    super(data._id);
    this.name = data.name;
    this.location = data.location;
    this.train = data.train;
  }
}

export default GymMachine;
