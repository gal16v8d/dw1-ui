import PkData from './mongo/PkData';

class Element extends PkData {
  name: string;

  constructor(data: Element) {
    super(data._id);
    this.name = data.name;
  }
}

export default Element;
