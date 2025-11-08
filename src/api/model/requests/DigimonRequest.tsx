import Digimon from '../mongo/Digimon';
import type { ActiveType, DigiType } from '../mongo/types/Digimon.types';

class DigimonRequest {
  name: string;
  level: string;
  type?: DigiType;
  active?: ActiveType;
  techInitial?: string;
  techFinal?: string;
  tech: Array<string>;
  locationHappy?: Array<string>;
  locationSad?: Array<string>;
  raisable: boolean;
  recruitable: boolean;
  itemDrop?: string;

  constructor(data: Digimon) {
    this.name = data.name;
    this.level = data.level._id;
    this.type = data?.type;
    this.active = data?.active;
    this.techInitial = data?.techInitial?._id;
    this.techFinal = data?.techFinal?._id;
    this.tech = data?.tech?.map((t) => t._id);
    this.locationHappy = data?.locationHappy?.map((lh) => lh._id);
    this.locationSad = data?.locationSad?.map((lh) => lh._id);
    this.raisable = data.raisable;
    this.recruitable = data.recruitable;
    this.itemDrop = data?.itemDrop?._id;
  }
}

export default DigimonRequest;
