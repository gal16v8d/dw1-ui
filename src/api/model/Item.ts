import Location from './Location';
import PkData from './mongo/PkData';

class Item extends PkData {
  name: string;
  effect?: string[];
  location?: Location[];
  note?: string;

  constructor(data: Item) {
    super(data._id);
    this.name = data.name;
    this.effect = data.effect;
    this.location = data.location;
    this.note = data.note;
  }
}

export default Item;
