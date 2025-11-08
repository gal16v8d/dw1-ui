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
import type { ColumnProps } from 'primereact/column';

const COLUMN_MAP: Record<
  string,
  (t: TFunction<'translation', undefined>) => Array<ColumnProps>
> = {
  [VALUES.API_OBJECT.CARD]: cardColumns,
  [VALUES.API_OBJECT.DIGIMON]: digimonColumns,
  [VALUES.API_OBJECT.ELEMENT]: elementColumns,
  [VALUES.API_OBJECT.EXCHANGE]: exchangeColumns,
  [VALUES.API_OBJECT.GYM_MACHINE]: gymMachineColumns,
  [VALUES.API_OBJECT.ITEM]: itemColumns,
  [VALUES.API_OBJECT.LEVEL]: levelColumns,
  [VALUES.API_OBJECT.LOCATION]: locationColumns,
  [VALUES.API_OBJECT.MACHINE]: machineColumns,
  [VALUES.API_OBJECT.MEDAL]: medalColumns,
  [VALUES.API_OBJECT.MENU]: menuColumns,
  [VALUES.API_OBJECT.MERIT_POINT]: meritPointColumns,
  [VALUES.API_OBJECT.RECRUIT]: recruitColumns,
  [VALUES.API_OBJECT.RESTAURANT]: restaurantColumns,
  [VALUES.API_OBJECT.RESTAURANT_FOOD]: restaurantFoodColumns,
  [VALUES.API_OBJECT.STATUS]: statusColumns,
  [VALUES.API_OBJECT.TECH]: techColumns,
};

export const mapColumns = (
  apiObject: ApiConfig,
  t: TFunction<'translation', undefined>
): Array<ColumnProps> => COLUMN_MAP[apiObject.name]?.(t) ?? [];
