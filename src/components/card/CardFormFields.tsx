import Card from '@/api/model/mongo/Card';
import type { CrudData } from '@/api/model/requests/CrudData';
import type { TFunction } from 'i18next';
import type { ReactNode } from 'react';
import type { UseFormReturn } from 'react-hook-form';

export const cardFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<Card>,
  selectedData: CrudData
): ReactNode => {
  const data = selectedData?.data as Card;

  return (
    <>
      <div className="field">
        <label htmlFor="name">{`${t('cardListing.l_name')}*`}</label>
        <div className="control">
          <input
            {...useForm.register('name', {
              required: true,
              shouldUnregister: true,
            })}
            className="input"
            type="text"
            name="name"
            placeholder={`${t('cardListing.l_name')}*`}
            defaultValue={data?.name}
          />
          {useForm.formState.errors.name && (
            <small className="p-error">{t('form.error.required')}</small>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="number">{`${t('cardListing.l_number')}*`}</label>
        <div className="control">
          <input
            {...useForm.register('number', {
              required: true,
              pattern: /^[\s\d]*$/,
              shouldUnregister: true,
            })}
            className="input"
            type="text"
            name="number"
            placeholder={`${t('cardListing.l_number')}*`}
            defaultValue={data?.number}
          />
          {useForm.formState.errors.number && (
            <small className="p-error">{t('form.error.required_number')}</small>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="point">{t('cardListing.l_point')}</label>
        <div className="control">
          <input
            {...useForm.register('point', {
              required: false,
              pattern: /^[\s\d]*$/,
              shouldUnregister: true,
            })}
            className="input"
            type="text"
            name="point"
            placeholder={t('cardListing.l_point') ?? 'cardListing.l_point'}
            defaultValue={data?.point}
          />
          {useForm.formState.errors.point && (
            <small className="p-error">{t('form.error.required_number')}</small>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="price">{t('cardListing.l_price')}</label>
        <div className="control">
          <input
            {...useForm.register('price', {
              required: false,
              pattern: /^[\s\d]*$/,
              shouldUnregister: true,
            })}
            className="input"
            type="text"
            name="price"
            placeholder={t('cardListing.l_price') ?? 'cardListing.l_price'}
            defaultValue={data?.price}
          />
          {useForm.formState.errors.price && (
            <small className="p-error">{t('form.error.required_number')}</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="exchangeable">
            {t('cardListing.l_exchangeable')}
          </label>
          <input
            {...useForm.register('exchangeable', {
              required: false,
              shouldUnregister: true,
            })}
            type="checkbox"
            name="exchangeable"
            defaultChecked={data?.exchangeable ?? false}
          />
        </div>
      </div>
    </>
  );
};
