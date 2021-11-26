import Location from './Location';
import PkData from './mongo/PkData';

class Machine extends PkData {
  location: Location;
  product: { name: string; price: number }[];
  random: boolean;

  constructor(data: Machine) {
    super(data._id);
    this.location = data.location;
    this.product = data.product;
    this.random = data.random;
  }
}

export default Machine;
