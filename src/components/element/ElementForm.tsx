import Element from 'api/model/mongo/Element';
import { TFunction } from 'i18next';
import { UseFormMethods } from 'react-hook-form';

export const elementForm = (
  t: TFunction<'translation', undefined>,
  useElementForm: UseFormMethods<Element>,
  selectedData: {
    data?: Element;
    creating: boolean;
    updating: boolean;
    deleting: boolean;
  }
) => {
  return (
    <>
      <div className="field">
        <label htmlFor="name">{`${t('elementListing.l_name')}*`}</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="name"
            placeholder={`${t('elementListing.l_name')}*`}
            defaultValue={selectedData?.data?.name ?? ''}
            ref={useElementForm.register({ required: true })}
          />
          {useElementForm.errors.name && (
            <small className="p-error">{t('form.error.required')}</small>
          )}
        </div>
      </div>
    </>
  );
};
