import type { ApiConfig } from '@/api/model/config/ApiConfig';
import { cardColumns } from '@/components/card/CardColumns';
import { digimonColumns } from '@/components/digimon/DigimonColumns';
import { elementColumns } from '@/components/element/ElementColumns';
import { exchangeColumns } from '@/components/exchange/ExchangeColumns';
import { gymMachineColumns } from '@/components/gymMachine/GymMachineColumns';
import { itemColumns } from '@/components/item/ItemColumns';
import { levelColumns } from '@/components/level/LevelColumns';
import { locationColumns } from '@/components/location/LocationColumns';
import { machineColumns } from '@/components/machine/MachineColumns';
import { medalColumns } from '@/components/medal/MedalColumns';
import { menuColumns } from '@/components/menu/MenuColumns';
import { meritPointColumns } from '@/components/meritPoint/MeritPointColumns';
import { recruitColumns } from '@/components/recruit/RecruitColumns';
import { restaurantColumns } from '@/components/restaurant/RestaurantColumns';
import { restaurantFoodColumns } from '@/components/restaurantFood/RestaurantFoodColumns';
import { statusColumns } from '@/components/status/StatusColumns';
import { techColumns } from '@/components/tech/TechColumns';
import VALUES from '@/constants/Dw1Constants';
import type { TFunction } from 'i18next';

export const mapColumns = (
  apiObject: ApiConfig,
  t: TFunction<'translation', undefined>
) => {
  switch (apiObject.name) {
    case VALUES.API_OBJECT.CARD:
      return cardColumns(t);
    case VALUES.API_OBJECT.DIGIMON:
      return digimonColumns(t);
    case VALUES.API_OBJECT.ELEMENT:
      return elementColumns(t);
    case VALUES.API_OBJECT.EXCHANGE:
      return exchangeColumns(t);
    case VALUES.API_OBJECT.GYM_MACHINE:
      return gymMachineColumns(t);
    case VALUES.API_OBJECT.ITEM:
      return itemColumns(t);
    case VALUES.API_OBJECT.LEVEL:
      return levelColumns(t);
    case VALUES.API_OBJECT.LOCATION:
      return locationColumns(t);
    case VALUES.API_OBJECT.MACHINE:
      return machineColumns(t);
    case VALUES.API_OBJECT.MEDAL:
      return medalColumns(t);
    case VALUES.API_OBJECT.MENU:
      return menuColumns(t);
    case VALUES.API_OBJECT.MERIT_POINT:
      return meritPointColumns(t);
    case VALUES.API_OBJECT.RECRUIT:
      return recruitColumns(t);
    case VALUES.API_OBJECT.RESTAURANT:
      return restaurantColumns(t);
    case VALUES.API_OBJECT.RESTAURANT_FOOD:
      return restaurantFoodColumns(t);
    case VALUES.API_OBJECT.STATUS:
      return statusColumns(t);
    case VALUES.API_OBJECT.TECH:
      return techColumns(t);
    default:
      return [];
  }
};
