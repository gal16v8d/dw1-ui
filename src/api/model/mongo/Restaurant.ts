import Digimon from './Digimon';
import PkData from './PkData';
import RestaurantFood from './RestaurantFood';

class Restaurant extends PkData {
  digimon: Digimon;
  restaurantFood: RestaurantFood[];

  constructor(data: Restaurant) {
    super(data._id);
    this.digimon = data.digimon;
    this.restaurantFood = data.restaurantFood;
  }
}

export default Restaurant;
