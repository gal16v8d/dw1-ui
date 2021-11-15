import { NavigateFunction } from 'react-router-dom';
import VALUES from '../../constants/Dw1Constants';

const mapApiToMenu = (navigate: NavigateFunction) => {
  return Object.values(VALUES.API_OBJECT).map((data) => {
    return {
      label: data.NAME,
      icon: 'pi pi-arrow-right',
      command: () => navigate(data.ROUTE),
    };
  });
};

const buildMenuOptions = (
  navigate: NavigateFunction
): {
  label: string;
  items: {
    label: string;
    icon: string;
    command: () => void;
  }[];
}[] => {
  return [
    {
      label: 'Wiki Info',
      items: mapApiToMenu(navigate),
    },
  ];
};

export { buildMenuOptions };
