import type { Element } from '@/api/model/mongo/Element';
import type { CrudData } from '@/api/model/requests/CrudData';
import type { TFunction } from 'i18next';
import type { UseFormReturn } from 'react-hook-form';
import { nameFormFields } from '../base/nameForm';

export const elementFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<Element>,
  selectedData: CrudData
) => nameFormFields(t, useForm, selectedData, 'elementListing.l_name');
