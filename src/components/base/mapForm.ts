import ApiConfig from 'api/model/config/ApiConfig';
import Card from 'api/model/mongo/Card';
import Element from 'api/model/mongo/Element';
import Level from 'api/model/mongo/Level';
import Location from 'api/model/mongo/Location';
import CrudData from 'api/model/requests/CrudData';
import { cardFormFields } from 'components/card/CardFormFields';
import { elementFormFields } from 'components/element/ElementFormFields';
import { levelFormFields } from 'components/level/LevelFormFields';
import { locationFormFields } from 'components/location/LocationFormFields';
import VALUES from 'constants/Dw1Constants';
import { TFunction } from 'i18next';
import { UseFormReturn } from 'react-hook-form';

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
      return elementFormFields(
        t,
        useForm as unknown as UseFormReturn<Element>,
        selectedData
      );
    case VALUES.API_OBJECT.LEVEL:
      return levelFormFields(
        t,
        useForm as unknown as UseFormReturn<Level>,
        selectedData
      );
    case VALUES.API_OBJECT.LOCATION:
      return locationFormFields(
        t,
        useForm as unknown as UseFormReturn<Location>,
        selectedData
      );
    default:
      return undefined;
  }
};
