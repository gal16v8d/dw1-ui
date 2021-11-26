import Element from './Element';
import PkData from './PkData';
import { RangType, SpecType } from './types/Tech.types';

class Tech extends PkData {
  number?: number;
  name: string;
  power: number;
  mp: number;
  rang?: RangType;
  spec?: SpecType;
  element?: Element;

  constructor(data: Tech) {
    super(data._id);
    this.number = data.number;
    this.name = data.name;
    this.power = data.power;
    this.mp = data.mp;
    this.rang = data.rang;
    this.spec = data.spec;
    this.element = data.element;
  }
}

export default Tech;
