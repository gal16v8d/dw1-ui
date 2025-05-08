import { API_BASE_CONFIG } from '@/config/ApiBaseConfig';
import type { TFunction } from 'i18next';
import type { NavigateFunction } from 'react-router-dom';

const mapApiToMenu = (
  t: TFunction<'translation', undefined>,
  navigate: NavigateFunction
) =>
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
): {
  label: string;
  items: {
    label: string;
    icon: string;
    command: () => void;
  }[];
}[] => [
  {
    label: 'Wiki Info',
    items: mapApiToMenu(t, navigate),
  },
];

export { buildMenuOptions };
