const API_URL = process.env.REACT_APP_API_URL;
const API_OBJECT = {
  CARD: 'card',
  DIGIMON: 'digimon',
  ELEMENT: 'element',
  EXCHANGE: 'exchange',
  GYM_MACHINE: 'gymMachine',
  ITEM: 'item',
  LEVEL: 'level',
  LOCATION: 'location',
  MACHINE: 'machine',
  MEDAL: 'medal',
  MENU: 'menu',
  MERIT_POINT: 'meritPoint',
  RECRUIT: 'recruit',
  STATUS: 'status',
  TECH: 'tech',
};

const VALUES = {
  API: {
    BASE_URL: API_URL,
  },
  API_OBJECT: {
    CARD: {
      NAME: API_OBJECT.CARD,
      QUERY_KEY: `${API_OBJECT.CARD}s`,
      ROUTE: `/${API_OBJECT.CARD}s`,
    },
    DIGIMON: {
      NAME: API_OBJECT.DIGIMON,
      QUERY_KEY: `${API_OBJECT.DIGIMON}s`,
      ROUTE: `/${API_OBJECT.DIGIMON}s`,
    },
    ELEMENT: {
      NAME: API_OBJECT.ELEMENT,
      QUERY_KEY: `${API_OBJECT.ELEMENT}s`,
      ROUTE: `/${API_OBJECT.ELEMENT}s`,
    },
    EXCHANGE: {
      NAME: API_OBJECT.EXCHANGE,
      QUERY_KEY: `${API_OBJECT.EXCHANGE}s`,
      ROUTE: `/${API_OBJECT.EXCHANGE}s`,
    },
    GYM_MACHINE: {
      NAME: API_OBJECT.GYM_MACHINE,
      QUERY_KEY: `${API_OBJECT.GYM_MACHINE}s`,
      ROUTE: `/${API_OBJECT.GYM_MACHINE}s`,
    },
    ITEM: {
      NAME: API_OBJECT.ITEM,
      QUERY_KEY: `${API_OBJECT.ITEM}s`,
      ROUTE: `/${API_OBJECT.ITEM}s`,
    },
    LEVEL: {
      NAME: API_OBJECT.LEVEL,
      QUERY_KEY: `${API_OBJECT.LEVEL}s`,
      ROUTE: `/${API_OBJECT.LEVEL}s`,
    },
    LOCATION: {
      NAME: API_OBJECT.LOCATION,
      QUERY_KEY: `${API_OBJECT.LOCATION}s`,
      ROUTE: `/${API_OBJECT.LOCATION}s`,
    },
    MACHINE: {
      NAME: API_OBJECT.MACHINE,
      QUERY_KEY: `${API_OBJECT.MACHINE}s`,
      ROUTE: `/${API_OBJECT.MACHINE}s`,
    },
    MEDAL: {
      NAME: API_OBJECT.MEDAL,
      QUERY_KEY: `${API_OBJECT.MEDAL}s`,
      ROUTE: `/${API_OBJECT.MEDAL}s`,
    },
    MENU: {
      NAME: API_OBJECT.MENU,
      QUERY_KEY: `${API_OBJECT.MENU}s`,
      ROUTE: `/${API_OBJECT.MENU}s`,
    },
    MERIT_POINT: {
      NAME: API_OBJECT.MERIT_POINT,
      QUERY_KEY: `${API_OBJECT.MERIT_POINT}s`,
      ROUTE: `/${API_OBJECT.MERIT_POINT}s`,
    },
    RECRUIT: {
      NAME: API_OBJECT.RECRUIT,
      QUERY_KEY: `${API_OBJECT.RECRUIT}s`,
      ROUTE: `/${API_OBJECT.RECRUIT}s`,
    },
    STATUS: {
      NAME: API_OBJECT.STATUS,
      QUERY_KEY: `${API_OBJECT.STATUS}`,
      ROUTE: `/${API_OBJECT.STATUS}`,
    },
    TECH: {
      NAME: API_OBJECT.TECH,
      QUERY_KEY: `${API_OBJECT.TECH}`,
      ROUTE: `/${API_OBJECT.TECH}`,
    },
  },
  MSG: {
    MSG_LIFE: 5000,
    MSG_TYPE: {
      SUCCESS: 'success',
      ERROR: 'error',
    },
  },
  PERMISSIONS: {
    ENABLE_CRUD: !!process.env.REACT_APP_ENABLE_CRUD || false,
  },
  QUERY_KEYS: {
    GET_ALL_BY_LOGIN: (login: string): string => `cuentas-${login}`,
  },
  TABLE: {
    ROWS: 10,
    ROW_OPTIONS: [10, 20, 50],
  },
  UI: {
    MAIN_TITLE: 'Digimon World 1 - Wiki',
  },
};

export default VALUES;
