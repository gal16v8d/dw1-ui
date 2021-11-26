import Card from '../Card';
import Digimon from '../Digimon';
import Element from '../Element';
import Exchange from '../Exchange';
import GymMachine from '../GymMachine';
import Item from '../Item';
import Level from '../Level';
import Location from '../Location';
import Machine from '../Machine';
import Medal from '../Medal';
import Menu from '../Menu';
import MeritPoint from '../MeritPoint';
import Recruit from '../Recruit';
import Status from '../Status';
import Tech from '../Tech';

type ApiData =
  | Card
  | Digimon
  | Element
  | Exchange
  | GymMachine
  | Item
  | Level
  | Location
  | Machine
  | Medal
  | Menu
  | MeritPoint
  | Recruit
  | Status
  | Tech;

export default ApiData;
