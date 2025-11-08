import { API_BASE_CONFIG } from '@/config/ApiBaseConfig';
import type { TFunction } from 'i18next';
import type { NavigateFunction } from 'react-router-dom';

type MenuItem = {
  label: string;
  icon: string;
  command: () => void;
};

type MenuOptions = Array<{
  label: string;
  items: Array<MenuItem>;
}>;

const mapApiToMenu = (
  t: TFunction<'translation', undefined>,
  navigate: NavigateFunction
): Array<MenuItem> =>
  API_BASE_CONFIG.map((data) => {
    return {
      label: t(`menu.${data.name}`),
      icon: 'pi pi-arrow-right',
      command: () => navigate(data.route),
    };
  });

const buildMenuOptions = (
  t: TFunction<'translation', undefined>,
  navigate: NavigateFunction
): MenuOptions => [
  {
    label: 'Wiki Info',
    items: mapApiToMenu(t, navigate),
  },
];

export { buildMenuOptions };
