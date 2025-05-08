import Location from '@/api/model/mongo/Location';
import type { CrudData } from '@/api/model/requests/CrudData';
import type { TFunction } from 'i18next';
import type { UseFormReturn } from 'react-hook-form';
import { nameFormFields } from '../base/nameForm';

export const locationFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<Location>,
  selectedData: CrudData
) => nameFormFields(t, useForm, selectedData, 'locationListing.l_name');
