import VALUES from '@/constants/Dw1Constants';
import { http, HttpResponse } from 'msw';
import cardsJson from './__mocks__/cards.json';
import digimonJson from './__mocks__/digimon.json';
import elementJson from './__mocks__/element.json';
import exchangeJson from './__mocks__/exchange.json';
import gymMachineJson from './__mocks__/gymMachine.json';
import itemJson from './__mocks__/item.json';
import levelJson from './__mocks__/level.json';
import locationJson from './__mocks__/location.json';
import machineJson from './__mocks__/machine.json';
import medalJson from './__mocks__/medal.json';
import menuJson from './__mocks__/menu.json';
import meritPointJson from './__mocks__/meritPoint.json';
import recruitJson from './__mocks__/recruit.json';
import restaurantJson from './__mocks__/restaurant.json';
import restaurantFoodJson from './__mocks__/restaurantFood.json';
import statusJson from './__mocks__/status.json';
import techJson from './__mocks__/tech.json';

const handlers = [
  http.get(`*${VALUES.API_OBJECT.CARD}s`, () =>
    HttpResponse.json(cardsJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.DIGIMON}s`, () =>
    HttpResponse.json(digimonJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.ELEMENT}s`, () =>
    HttpResponse.json(elementJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.EXCHANGE}s`, () =>
    HttpResponse.json(exchangeJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.GYM_MACHINE}s`, () =>
    HttpResponse.json(gymMachineJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.ITEM}s`, () =>
    HttpResponse.json(itemJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.LEVEL}s`, () =>
    HttpResponse.json(levelJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.LOCATION}s`, () =>
    HttpResponse.json(locationJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.MACHINE}s`, () =>
    HttpResponse.json(machineJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.MEDAL}s`, () =>
    HttpResponse.json(medalJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.MENU}s`, () =>
    HttpResponse.json(menuJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.MERIT_POINT}s`, () =>
    HttpResponse.json(meritPointJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.RECRUIT}s`, () =>
    HttpResponse.json(recruitJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.RESTAURANT}s`, () =>
    HttpResponse.json(restaurantJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.RESTAURANT_FOOD}`, () =>
    HttpResponse.json(restaurantFoodJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.STATUS}`, () =>
    HttpResponse.json(statusJson, { status: 200 })
  ),
  http.get(`*${VALUES.API_OBJECT.TECH}s`, () =>
    HttpResponse.json(techJson, { status: 200 })
  ),
];

export default handlers;
