import Card from 'api/model/mongo/Card';
import { TFunction } from 'i18next';
import { UseFormMethods } from 'react-hook-form';

export const getCardForm = (
  t: TFunction<'translation', undefined>,
  useElementForm: UseFormMethods<Card>,
  selectedData: {
    data?: Card;
    creating: boolean;
    updating: boolean;
    deleting: boolean;
  },
  exchangeable: boolean,
  setExchangeable: React.Dispatch<React.SetStateAction<boolean>>
): JSX.Element => {
  return (
    <>
      <div className="field">
        <label htmlFor="name">{`${t('cardListing.l_name')}*`}</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="name"
            placeholder={`${t('cardListing.l_name')}*`}
            defaultValue={selectedData?.data?.name}
            ref={useElementForm.register({ required: true })}
          />
          {useElementForm.errors.name && (
            <small className="p-error">{t('form.error.required')}</small>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="number">{`${t('cardListing.l_number')}*`}</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="number"
            placeholder={`${t('cardListing.l_number')}*`}
            defaultValue={selectedData?.data?.number}
            ref={useElementForm.register({
              required: true,
              pattern: /^[\s\d]*$/,
            })}
          />
          {useElementForm.errors.number && (
            <small className="p-error">{t('form.error.required_number')}</small>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="point">{t('cardListing.l_point')}</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="point"
            placeholder={t('cardListing.l_point') ?? 'cardListing.l_point'}
            defaultValue={selectedData?.data?.point}
            ref={useElementForm.register({
              required: false,
              pattern: /^[\s\d]*$/,
            })}
          />
          {useElementForm.errors.point && (
            <small className="p-error">{t('form.error.required_number')}</small>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="price">{t('cardListing.l_price')}</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="price"
            placeholder={t('cardListing.l_price') ?? 'cardListing.l_price'}
            defaultValue={selectedData?.data?.price}
            ref={useElementForm.register({
              required: false,
              pattern: /^[\s\d]*$/,
            })}
          />
          {useElementForm.errors.price && (
            <small className="p-error">{t('form.error.required_number')}</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="exchangeable">
            {t('cardListing.l_exchangeable')}
          </label>
          <input
            type="checkbox"
            name="exchangeable"
            defaultChecked={exchangeable}
            onChange={(e) => setExchangeable(e.target.checked)}
            ref={useElementForm.register({ required: false })}
          />
        </div>
      </div>
    </>
  );
};
