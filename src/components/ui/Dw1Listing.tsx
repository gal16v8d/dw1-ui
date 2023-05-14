import ApiConfig from '@/api/model/config/ApiConfig';
import PkData from '@/api/model/mongo/PkData';
import CrudData from '@/api/model/requests/CrudData';
import GenericService from '@/api/service/GenericService';
import { useGetAll } from '@/api/service/hooks/useGenericService';
import { mapColumns } from '@/components/base/mapColumns';
import { mapForm } from '@/components/base/mapForm';
import Dw1BaseForm from '@/components/ui/Dw1BaseForm';
import Dw1Spinner from '@/components/ui/Dw1Spinner';
import VALUES from '@/constants/Dw1Constants';
import { useListingContext } from '@/provider/listing/Dw1ListingProvider';
import { showMessage } from '@/util/ErrorHandler';
import { Button } from 'primereact/button';
import { Column, ColumnProps } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Image } from 'primereact/image';
import { Messages } from 'primereact/messages';
import { Toolbar } from 'primereact/toolbar';
import { FC, Fragment, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import Dw1DebugDisplay from './Dw1DebugDisplay';

interface ListingProps {
  apiObject: ApiConfig;
}

const Dw1Listing: FC<ListingProps> = ({ apiObject }) => {
  const { t, message } = useListingContext();
  const service = new GenericService(apiObject.route);

  const { data, refetch } = useGetAll(
    apiObject.queryKey,
    service,
    apiObject.expanded,
    {
      onError: (error: { message: string }) => {
        showMessage(message, 'warn', 'warn', error?.message);
      },
      // Api is not updated so often, so this can be Infinity
      // to avoid multiple fetch to Db, and avoid to consume a lot of
      // railway backend free tier
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  const [selectedData, setSelectedData] = useState<CrudData>({
    creating: false,
    updating: false,
    deleting: false,
  });

  const form = useForm<object>();

  const editComponent: React.ReactNode | undefined = useMemo(() => {
    const formData = mapForm(apiObject, t, form, selectedData);
    return (
      formData && (
        <Dw1BaseForm
          data-testid={`dw1-form-${apiObject.name}`}
          selectedData={selectedData}
          setSelectedData={setSelectedData}
          refetch={refetch}
          showMessage={showMessage}
          apiObject={apiObject}
          service={service}
          handleSubmit={form.handleSubmit}
          formElements={formData}
        />
      )
    );
  }, [apiObject, selectedData]);

  const columns: ColumnProps[] = useMemo(
    () => mapColumns(apiObject, t),
    [apiObject, t]
  );

  const imageColumn = apiObject.imageCol ? apiObject.imagePath : undefined;

  const mapImage = (rowData: unknown): React.ReactNode => (
    <div className="container" style={{ display: 'flex' }}>
      <Image
        src={`assets/img/${imageColumn}/${(rowData as PkData)._id}.png`}
        alt={`${imageColumn} img`}
        width="50"
        height="50"
      />
    </div>
  );

  const appendImageColumn = (columnsToEdit: ColumnProps[]) => {
    const elementExists = columns.find((col) => col.columnKey === 'image');
    if (!elementExists) {
      columnsToEdit.unshift({
        columnKey: 'image',
        body: mapImage,
        header: 'Image',
      });
    }
  };

  const mapToTableColumns = () => {
    const columnsToMap = columns;
    if (imageColumn) {
      appendImageColumn(columnsToMap);
    }
    return columnsToMap.map((col: ColumnProps, i: number) => (
      <Column
        key={`${col.columnKey}-${i}`}
        body={col.body}
        field={col.field}
        header={col.header}
        sortable={col.sortable}
        sortFunction={col.sortFunction}
        style={col.style}
      />
    ));
  };

  const addData = () => {
    setSelectedData({
      data: undefined,
      creating: true,
      updating: false,
      deleting: false,
    });
  };

  const editData = (rowData: unknown) => {
    setSelectedData({
      data: rowData,
      creating: false,
      updating: true,
      deleting: false,
    });
  };

  const deleteData = (rowData: unknown) => {
    setSelectedData({
      data: rowData,
      creating: false,
      updating: false,
      deleting: true,
    });
  };

  const crudEnabled = (): boolean =>
    VALUES.PERMISSIONS.ENABLE_CRUD && !!editComponent;

  const leftToolbarTemplate = (): React.ReactNode => (
    <>
      {crudEnabled() && (
        <Fragment>
          <Button
            icon="pi pi-plus"
            label={
              t('baseComponent.listing.new') ?? 'baseComponent.listing.new'
            }
            onClick={addData}
            style={{ float: 'left' }}
          />
        </Fragment>
      )}
    </>
  );

  const actionTemplate = (rowData: unknown): React.ReactNode => (
    <div>
      <Button
        icon="pi pi-pencil"
        onClick={() => editData(rowData)}
        tooltip={
          t('baseComponent.listing.update') ?? 'baseComponent.listing.update'
        }
      />
      <Button
        className="p-button-warning"
        icon="pi pi-trash"
        onClick={() => deleteData(rowData)}
        tooltip={
          t('baseComponent.listing.delete') ?? 'baseComponent.listing.delete'
        }
      />
    </div>
  );

  return (
    <div className="container is-fluid">
      <br />
      {<Messages ref={message} />}
      <div className="content-section implementation">
        {!data ? (
          <Dw1Spinner />
        ) : (
          <>
            <Dw1DebugDisplay data={data} />
            <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>
            <DataTable
              //@ts-expect-error unknown[] not allowed here after update
              value={data}
              paginator={true}
              rows={VALUES.TABLE.ROWS}
              rowsPerPageOptions={VALUES.TABLE.ROW_OPTIONS}
              loading={!data}
            >
              {mapToTableColumns()}
              {crudEnabled() && (
                <Column
                  body={actionTemplate}
                  style={{ textAlign: 'center', width: '8em' }}
                  header={t('baseComponent.listing.actions')}
                />
              )}
            </DataTable>
            {VALUES.PERMISSIONS.ENABLE_CRUD && editComponent}
          </>
        )}
      </div>
    </div>
  );
};

export default Dw1Listing;
