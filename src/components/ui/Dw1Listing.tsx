import ApiData from 'api/model/mongo/types/ApiData.types';
import VALUES from 'constants/Dw1Constants';
import { Button } from 'primereact/button';
import { Column, ColumnProps } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Image } from 'primereact/image';
import { Toolbar } from 'primereact/toolbar';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import React from 'react';
import Dw1Spinner from './Dw1Spinner';
import { Messages } from 'primereact/messages';

interface ListingProps {
  apiData?: ApiData[];
  columns: ColumnProps[];
  imageColumn?: string;
  crudData?: {
    selectedData: any;
    setSelectedData: React.Dispatch<React.SetStateAction<any>>;
  };
  editorComponent?: JSX.Element;
}

const Dw1Listing: React.FC<ListingProps> = ({
  apiData,
  columns,
  imageColumn,
  crudData,
  editorComponent,
}) => {
  const { t, message } = useListingContext();
  const mapImage = (rowData: ApiData) => {
    return (
      <div className="container" style={{ display: 'flex' }}>
        <Image
          src={`assets/img/${imageColumn}/${rowData._id}.png`}
          alt={`${imageColumn} img`}
          width="50"
          height="50"
        />
      </div>
    );
  };

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
    crudData &&
      crudData.setSelectedData({
        data: undefined,
        creating: true,
        updating: false,
        deleting: false,
      });
  };

  const editData = (rowData: ApiData) => {
    console.log('editData', rowData);
    crudData &&
      crudData.setSelectedData({
        data: rowData,
        creating: false,
        updating: true,
        deleting: false,
      });
  };

  const deleteData = (rowData: ApiData) => {
    crudData &&
      crudData.setSelectedData({
        data: rowData,
        creating: false,
        updating: false,
        deleting: true,
      });
  };

  const leftToolbarTemplate = () => {
    return (
      <>
        {VALUES.PERMISSIONS.ENABLE_CRUD && crudData && (
          <React.Fragment>
            <Button
              icon="pi pi-plus"
              label={
                t('baseComponent.listing.new') ?? 'baseComponent.listing.new'
              }
              onClick={addData}
              style={{ float: 'left' }}
            />
          </React.Fragment>
        )}
      </>
    );
  };

  const actionTemplate = (rowData: ApiData) => {
    return (
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
  };

  return (
    <div className="container is-fluid">
      <br />
      {<Messages ref={message} />}
      <div className="content-section implementation">
        {!apiData ? (
          <Dw1Spinner />
        ) : (
          <>
            <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>
            <DataTable
              value={apiData}
              paginator={true}
              rows={VALUES.TABLE.ROWS}
              rowsPerPageOptions={VALUES.TABLE.ROW_OPTIONS}
              loading={!apiData}
            >
              {mapToTableColumns()}
              {VALUES.PERMISSIONS.ENABLE_CRUD && crudData && (
                <Column
                  body={actionTemplate}
                  style={{ textAlign: 'center', width: '8em' }}
                  header={t('baseComponent.listing.actions')}
                />
              )}
            </DataTable>
            {VALUES.PERMISSIONS.ENABLE_CRUD && editorComponent}
          </>
        )}
      </div>
    </div>
  );
};

export default Dw1Listing;
