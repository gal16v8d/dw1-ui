import Level from 'api/model/mongo/Level';
import { TFunction } from 'i18next';
import { UseFormReturn } from 'react-hook-form';

export const levelFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<Level>,
  selectedData: {
    data?: Level;
    creating: boolean;
    updating: boolean;
    deleting: boolean;
  }
) => {
  return (
    <>
      <div className="field">
        <label htmlFor="name">{`${t('levelListing.l_name')}*`}</label>
        <div className="control">
          <input
            {...useForm.register('name', { required: true })}
            className="input"
            type="text"
            name="name"
            placeholder={`${t('levelListing.l_name')}*`}
            defaultValue={selectedData?.data?.name ?? ''}
          />
          {useForm.formState.errors.name && (
            <small className="p-error">{t('form.error.required')}</small>
          )}
        </div>
      </div>
    </>
  );
};
