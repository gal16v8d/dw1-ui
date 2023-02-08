import VALUES from 'constants/Dw1Constants';
import { rest } from 'msw';
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
  rest.get(`*${VALUES.API_OBJECT.CARD}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(cardsJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.DIGIMON}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(digimonJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.ELEMENT}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(elementJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.EXCHANGE}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(exchangeJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.GYM_MACHINE}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(gymMachineJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.ITEM}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(itemJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.LEVEL}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(levelJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.LOCATION}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(locationJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.MACHINE}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(machineJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.MEDAL}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(medalJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.MENU}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(menuJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.MERIT_POINT}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(meritPointJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.RECRUIT}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(recruitJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.RESTAURANT}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(restaurantJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.RESTAURANT_FOOD}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(restaurantFoodJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.STATUS}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(statusJson))
  ),
  rest.get(`*${VALUES.API_OBJECT.TECH}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(techJson))
  ),
];

export default handlers;
