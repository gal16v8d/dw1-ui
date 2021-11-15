import PkData from './mongo/PkData';

class Card extends PkData {
  number: number;
  name: string;
  point?: number;
  price?: number;
  exchangeable: boolean;

  constructor(data: Card) {
    super(data._id);
    this.number = data.number;
    this.name = data.name;
    this.point = data.point;
    this.price = data.price;
    this.exchangeable = data.exchangeable;
  }
}

export default Card;
