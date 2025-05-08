import Level from '@/api/model/mongo/Level';
import type { CrudData } from '@/api/model/requests/CrudData';
import type { TFunction } from 'i18next';
import type { UseFormReturn } from 'react-hook-form';
import { nameFormFields } from '../base/nameForm';

export const levelFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<Level>,
  selectedData: CrudData
) => nameFormFields(t, useForm, selectedData, 'levelListing.l_name');
