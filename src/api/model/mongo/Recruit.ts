import Digimon from './Digimon';
import Location from './Location';
import PkData from './PkData';

class Recruit extends PkData {
  digimon: Digimon;
  location: Array<Location>;
  job?: string;
  note?: string;

  constructor(data: Recruit) {
    super(data._id);
    this.digimon = data.digimon;
    this.location = data.location;
    this.job = data.job;
    this.note = data.note;
  }
}

export default Recruit;
