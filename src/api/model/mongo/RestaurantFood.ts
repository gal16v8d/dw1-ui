import PkData from './PkData';

class RestaurantFood extends PkData {
  name: string;
  price: number;
  effect: Array<string>;

  constructor(data: RestaurantFood) {
    super(data._id);
    this.name = data.name;
    this.price = data.price;
    this.effect = data.effect;
  }
}

export default RestaurantFood;
