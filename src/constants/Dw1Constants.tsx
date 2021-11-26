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
      IMAGE: `${API_OBJECT.CARD}s`,
      NAME: API_OBJECT.CARD,
      QUERY_KEY: `${API_OBJECT.CARD}s`,
      ROUTE: `/${API_OBJECT.CARD}s`,
    },
    DIGIMON: {
      IMAGE: `${API_OBJECT.DIGIMON}s`,
      NAME: API_OBJECT.DIGIMON,
      QUERY_KEY: `${API_OBJECT.DIGIMON}s`,
      ROUTE: `/${API_OBJECT.DIGIMON}s`,
    },
    ELEMENT: {
      IMAGE: `${API_OBJECT.ELEMENT}s`,
      NAME: API_OBJECT.ELEMENT,
      QUERY_KEY: `${API_OBJECT.ELEMENT}s`,
      ROUTE: `/${API_OBJECT.ELEMENT}s`,
    },
    EXCHANGE: {
      IMAGE: `${API_OBJECT.EXCHANGE}s`,
      NAME: API_OBJECT.EXCHANGE,
      QUERY_KEY: `${API_OBJECT.EXCHANGE}s`,
      ROUTE: `/${API_OBJECT.EXCHANGE}s`,
    },
    GYM_MACHINE: {
      IMAGE: `${API_OBJECT.GYM_MACHINE}s`,
      NAME: API_OBJECT.GYM_MACHINE,
      QUERY_KEY: `${API_OBJECT.GYM_MACHINE}s`,
      ROUTE: `/${API_OBJECT.GYM_MACHINE}s`,
    },
    ITEM: {
      IMAGE: `${API_OBJECT.ITEM}s`,
      NAME: API_OBJECT.ITEM,
      QUERY_KEY: `${API_OBJECT.ITEM}s`,
      ROUTE: `/${API_OBJECT.ITEM}s`,
    },
    LEVEL: {
      IMAGE: `${API_OBJECT.LEVEL}s`,
      NAME: API_OBJECT.LEVEL,
      QUERY_KEY: `${API_OBJECT.LEVEL}s`,
      ROUTE: `/${API_OBJECT.LEVEL}s`,
    },
    LOCATION: {
      IMAGE: `${API_OBJECT.LOCATION}s`,
      NAME: API_OBJECT.LOCATION,
      QUERY_KEY: `${API_OBJECT.LOCATION}s`,
      ROUTE: `/${API_OBJECT.LOCATION}s`,
    },
    MACHINE: {
      IMAGE: `${API_OBJECT.MACHINE}s`,
      NAME: API_OBJECT.MACHINE,
      QUERY_KEY: `${API_OBJECT.MACHINE}s`,
      ROUTE: `/${API_OBJECT.MACHINE}s`,
    },
    MEDAL: {
      IMAGE: `${API_OBJECT.MEDAL}s`,
      NAME: API_OBJECT.MEDAL,
      QUERY_KEY: `${API_OBJECT.MEDAL}s`,
      ROUTE: `/${API_OBJECT.MEDAL}s`,
    },
    MENU: {
      IMAGE: `${API_OBJECT.MENU}s`,
      NAME: API_OBJECT.MENU,
      QUERY_KEY: `${API_OBJECT.MENU}s`,
      ROUTE: `/${API_OBJECT.MENU}s`,
    },
    MERIT_POINT: {
      IMAGE: `${API_OBJECT.MERIT_POINT}s`,
      NAME: API_OBJECT.MERIT_POINT,
      QUERY_KEY: `${API_OBJECT.MERIT_POINT}s`,
      ROUTE: `/${API_OBJECT.MERIT_POINT}s`,
    },
    RECRUIT: {
      IMAGE: `${API_OBJECT.RECRUIT}s`,
      NAME: API_OBJECT.RECRUIT,
      QUERY_KEY: `${API_OBJECT.RECRUIT}s`,
      ROUTE: `/${API_OBJECT.RECRUIT}s`,
    },
    STATUS: {
      IMAGE: `${API_OBJECT.STATUS}`,
      NAME: API_OBJECT.STATUS,
      QUERY_KEY: `${API_OBJECT.STATUS}`,
      ROUTE: `/${API_OBJECT.STATUS}`,
    },
    TECH: {
      IMAGE: `${API_OBJECT.TECH}s`,
      NAME: API_OBJECT.TECH,
      QUERY_KEY: `${API_OBJECT.TECH}s`,
      ROUTE: `/${API_OBJECT.TECH}s`,
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
