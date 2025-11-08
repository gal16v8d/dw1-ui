import PkData from './/PkData';
import Item from './Item';
import Level from './Level';
import Location from './Location';
import Tech from './Tech';
import type { ActiveType, DigiType } from './types/Digimon.types';

class Digimon extends PkData {
  name: string;
  level: Level;
  type?: DigiType;
  active?: ActiveType;
  techInitial?: Tech;
  techFinal?: Tech;
  tech: Array<Tech>;
  locationHappy?: Array<Location>;
  locationSad?: Array<Location>;
  raisable: boolean;
  recruitable: boolean;
  itemDrop?: Item;

  constructor(data: Digimon) {
    super(data._id);
    this.name = data.name;
    this.level = data.level;
    this.type = data.type;
    this.active = data.active;
    this.techInitial = data.techInitial;
    this.techFinal = data.techFinal;
    this.tech = data.tech;
    this.locationHappy = data.locationHappy;
    this.locationSad = data.locationSad;
    this.raisable = data.raisable;
    this.recruitable = data.recruitable;
    this.itemDrop = data.itemDrop;
  }
}

export default Digimon;
