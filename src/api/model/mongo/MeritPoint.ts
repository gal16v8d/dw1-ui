import Item from './Item';
import PkData from './PkData';

class MeritPoint extends PkData {
  point: number;
  item: Item;

  constructor(data: MeritPoint) {
    super(data._id);
    this.point = data.point;
    this.item = data.item;
  }
}

export default MeritPoint;
