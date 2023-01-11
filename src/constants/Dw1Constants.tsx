const API_URL = process.env.REACT_APP_API_URL;

const VALUES = {
  API: {
    BASE_URL: API_URL,
  },
  API_OBJECT: {
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
  },
  MSG: {
    MSG_LIFE: 5000,
  },
  PERMISSIONS: {
    ENABLE_CRUD: !!process.env.REACT_APP_ENABLE_CRUD || false,
  },
  TABLE: {
    ROWS: 10,
    ROW_OPTIONS: [10, 20, 50],
  },
};

export default VALUES;
