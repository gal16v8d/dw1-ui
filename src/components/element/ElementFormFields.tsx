import Element from '@/api/model/mongo/Element';
import CrudData from '@/api/model/requests/CrudData';
import { TFunction } from 'i18next';
import { UseFormReturn } from 'react-hook-form';
import { nameFormFields } from '../base/nameForm';

export const elementFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<Element>,
  selectedData: CrudData
) => nameFormFields(t, useForm, selectedData, 'elementListing.l_name');
