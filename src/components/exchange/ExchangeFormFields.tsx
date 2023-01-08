import Exchange from 'api/model/mongo/Exchange';
import { TFunction } from 'i18next';
import { UseFormReturn } from 'react-hook-form';

export const exchangeFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<Exchange>,
  selectedData: {
    data?: Exchange;
    creating: boolean;
    updating: boolean;
    deleting: boolean;
  }
) => {
  return (
    <>
      <div className="field">
        <label htmlFor="who">{`${t('exchangeListing.l_who')}*`}</label>
        <div className="control">
          <input
            {...useForm.register('who', { required: true })}
            className="input"
            type="text"
            name="who"
            placeholder={`${t('exchangeListing.l_who')}*`}
            defaultValue={selectedData?.data?.who}
          />
          {useForm.formState.errors.who && (
            <small className="p-error">{t('form.error.required')}</small>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="base">{`${t('exchangeListing.l_base')}*`}</label>
        <div className="control">
          <input
            {...useForm.register('base', { required: true })}
            className="input"
            type="text"
            name="base"
            placeholder={`${t('exchangeListing.l_base')}*`}
            defaultValue={selectedData?.data?.base}
          />
          {useForm.formState.errors.base && (
            <small className="p-error">{t('form.error.required')}</small>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="result">{`${t('exchangeListing.l_result')}*`}</label>
        <div className="control">
          <input
            {...useForm.register('result', {
              required: true,
            })}
            className="input"
            type="text"
            name="result"
            placeholder={`${t('exchangeListing.l_result')}*`}
            defaultValue={selectedData?.data?.result}
          />
          {useForm.formState.errors.result && (
            <small className="p-error">{t('form.error.required')}</small>
          )}
        </div>
      </div>
    </>
  );
};
