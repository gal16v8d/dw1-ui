import { TFunction } from 'react-i18next';
import { NavigateFunction } from 'react-router-dom';
import VALUES from '../../constants/Dw1Constants';

const mapApiToMenu = (
  t: TFunction<'translation', undefined>,
  navigate: NavigateFunction
) => {
  return Object.values(VALUES.API_OBJECT).map((data) => {
    return {
      label: t(`menu.${data.NAME}`),
      icon: 'pi pi-arrow-right',
      command: () => navigate(data.ROUTE),
    };
  });
};

const buildMenuOptions = (
  t: TFunction<'translation', undefined>,
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
      items: mapApiToMenu(t, navigate),
    },
  ];
};

export { buildMenuOptions };
