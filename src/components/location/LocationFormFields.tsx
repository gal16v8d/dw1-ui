import Location from '@/api/model/mongo/Location';
import CrudData from '@/api/model/requests/CrudData';
import { TFunction } from 'i18next';
import { UseFormReturn } from 'react-hook-form';
import { nameFormFields } from '../base/nameForm';

export const locationFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<Location>,
  selectedData: CrudData
) => nameFormFields(t, useForm, selectedData, 'locationListing.l_name');
