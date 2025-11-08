import PkData from './PkData';
import type { MenuType } from './types/Menu.types';

class Menu extends PkData {
  name: string;
  type: MenuType;
  description: string;

  constructor(data: Menu) {
    super(data._id);
    this.name = data.name;
    this.type = data.type;
    this.description = data.description;
  }
}

export default Menu;
