import Level from '@/api/model/mongo/Level';
import CrudData from '@/api/model/requests/CrudData';
import { TFunction } from 'i18next';
import { UseFormReturn } from 'react-hook-form';
import { nameFormFields } from '../base/nameForm';

export const levelFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<Level>,
  selectedData: CrudData
) => nameFormFields(t, useForm, selectedData, 'levelListing.l_name');
