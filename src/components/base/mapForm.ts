import type { ApiConfig } from '@/api/model/config/ApiConfig';
import Card from '@/api/model/mongo/Card';
import type { Element } from '@/api/model/mongo/Element';
import Level from '@/api/model/mongo/Level';
import Location from '@/api/model/mongo/Location';
import type { CrudData } from '@/api/model/requests/CrudData';
import { nameFormFields } from '@/components/base/nameForm';
import { cardFormFields } from '@/components/card/CardFormFields';
import VALUES from '@/constants/Dw1Constants';
import type { TFunction } from 'i18next';
import type { UseFormReturn } from 'react-hook-form';

export const mapForm = (
  apiObject: ApiConfig,
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<object>,
  selectedData: CrudData
) => {
  switch (apiObject.name) {
    case VALUES.API_OBJECT.CARD:
      return cardFormFields(
        t,
        useForm as unknown as UseFormReturn<Card>,
        selectedData
      );
    case VALUES.API_OBJECT.ELEMENT:
      return nameFormFields(
        t,
        useForm as unknown as UseFormReturn<Element>,
        selectedData,
        'elementListing.l_name'
      );
    case VALUES.API_OBJECT.LEVEL:
      return nameFormFields(
        t,
        useForm as unknown as UseFormReturn<Level>,
        selectedData,
        'levelListing.l_name'
      );
    case VALUES.API_OBJECT.LOCATION:
      return nameFormFields(
        t,
        useForm as unknown as UseFormReturn<Location>,
        selectedData,
        'locationListing.l_name'
      );
    default:
      return undefined;
  }
};
