import ApiConfig from 'api/model/config/ApiConfig';
import VALUES from 'constants/Dw1Constants';

export const API_BASE_CONFIG: ApiConfig[] = [
  {
    name: VALUES.API_OBJECT.CARD,
    expanded: false,
    imageCol: false,
    queryKey: `${VALUES.API_OBJECT.CARD}s`,
    route: `/${VALUES.API_OBJECT.CARD}s`,
  },
  {
    name: VALUES.API_OBJECT.DIGIMON,
    expanded: true,
    imageCol: false,
    queryKey: `${VALUES.API_OBJECT.DIGIMON}s`,
    route: `/${VALUES.API_OBJECT.DIGIMON}s`,
  },
  {
    name: VALUES.API_OBJECT.ELEMENT,
    expanded: false,
    imageCol: true,
    imagePath: `${VALUES.API_OBJECT.ELEMENT}s`,
    queryKey: `${VALUES.API_OBJECT.ELEMENT}s`,
    route: `/${VALUES.API_OBJECT.ELEMENT}s`,
  },
  {
    name: VALUES.API_OBJECT.EXCHANGE,
    expanded: false,
    imageCol: false,
    queryKey: `${VALUES.API_OBJECT.EXCHANGE}s`,
    route: `/${VALUES.API_OBJECT.EXCHANGE}s`,
  },
  {
    name: VALUES.API_OBJECT.GYM_MACHINE,
    expanded: true,
    imageCol: false,
    queryKey: `${VALUES.API_OBJECT.GYM_MACHINE}s`,
    route: `/${VALUES.API_OBJECT.GYM_MACHINE}s`,
  },
  {
    name: VALUES.API_OBJECT.ITEM,
    expanded: true,
    imageCol: true,
    imagePath: `${VALUES.API_OBJECT.ITEM}s`,
    queryKey: `${VALUES.API_OBJECT.ITEM}s`,
    route: `/${VALUES.API_OBJECT.ITEM}s`,
  },
  {
    name: VALUES.API_OBJECT.LEVEL,
    expanded: false,
    imageCol: false,
    queryKey: `${VALUES.API_OBJECT.LEVEL}s`,
    route: `/${VALUES.API_OBJECT.LEVEL}s`,
  },
  {
    name: VALUES.API_OBJECT.LOCATION,
    expanded: false,
    imageCol: false,
    queryKey: `${VALUES.API_OBJECT.LOCATION}s`,
    route: `/${VALUES.API_OBJECT.LOCATION}s`,
  },
  {
    name: VALUES.API_OBJECT.MACHINE,
    expanded: true,
    imageCol: false,
    queryKey: `${VALUES.API_OBJECT.MACHINE}s`,
    route: `/${VALUES.API_OBJECT.MACHINE}s`,
  },
  {
    name: VALUES.API_OBJECT.MEDAL,
    expanded: false,
    imageCol: true,
    imagePath: `${VALUES.API_OBJECT.MEDAL}s`,
    queryKey: `${VALUES.API_OBJECT.MEDAL}s`,
    route: `/${VALUES.API_OBJECT.MEDAL}s`,
  },
  {
    name: VALUES.API_OBJECT.MENU,
    expanded: false,
    imageCol: false,
    queryKey: `${VALUES.API_OBJECT.MENU}s`,
    route: `/${VALUES.API_OBJECT.MENU}s`,
  },
  {
    name: VALUES.API_OBJECT.MERIT_POINT,
    expanded: true,
    imageCol: false,
    queryKey: `${VALUES.API_OBJECT.MERIT_POINT}s`,
    route: `/${VALUES.API_OBJECT.MERIT_POINT}s`,
  },
  {
    name: VALUES.API_OBJECT.RECRUIT,
    expanded: true,
    imageCol: false,
    queryKey: `${VALUES.API_OBJECT.RECRUIT}s`,
    route: `/${VALUES.API_OBJECT.RECRUIT}s`,
  },
  {
    name: VALUES.API_OBJECT.RESTAURANT_FOOD,
    expanded: false,
    imageCol: false,
    queryKey: `${VALUES.API_OBJECT.RESTAURANT_FOOD}`,
    route: `/${VALUES.API_OBJECT.RESTAURANT_FOOD}`,
  },
  {
    name: VALUES.API_OBJECT.STATUS,
    expanded: false,
    imageCol: true,
    imagePath: `${VALUES.API_OBJECT.STATUS}`,
    queryKey: `${VALUES.API_OBJECT.STATUS}`,
    route: `/${VALUES.API_OBJECT.STATUS}`,
  },
  {
    name: VALUES.API_OBJECT.TECH,
    expanded: true,
    imageCol: false,
    queryKey: `${VALUES.API_OBJECT.TECH}s`,
    route: `/${VALUES.API_OBJECT.TECH}s`,
  },
];
