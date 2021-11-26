import { Button } from 'primereact/button';
import { Column, ColumnProps } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Image } from 'primereact/image';
import { Messages } from 'primereact/messages';
import { Toolbar } from 'primereact/toolbar';
import React, { useRef } from 'react';
import ApiData from '../../api/model/mongo/types/ApiData.types';
import Message from '../../api/util/Message';
import VALUES from '../../constants/Dw1Constants';
import Dw1Sidebar from './Dw1Sidebar';
import Dw1Spinner from './Dw1Spinner';

interface ListingProps {
  apiData?: ApiData[];
  columns: ColumnProps[];
  editorComponent?: JSX.Element;
  imageColumn?: string;
}

const Dw1Listing: React.FC<ListingProps> = ({
  apiData,
  columns,
  editorComponent,
  imageColumn,
}) => {
  const messages = useRef<Messages>(null);

  if (!apiData) {
    return <Dw1Spinner />;
  }

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
    console.log('add');
  };

  const editData = (rowData: ApiData) => {
    console.log('edit');
  };

  const deleteData = (rowData: ApiData) => {
    console.log('delete');
  };

  const showMessage = (msg: Message | Message[]): void => {
    messages?.current?.show(msg);
  };

  const actionTemplate = (rowData: ApiData) => {
    return (
      <div>
        <Button
          icon="pi pi-pencil"
          onClick={() => editData(rowData)}
          tooltip="Update"
        />
        <Button
          className="p-button-warning"
          icon="pi pi-trash"
          onClick={() => deleteData(rowData)}
          tooltip="Delete"
        />
      </div>
    );
  };

  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-plus"
          label="New"
          onClick={addData}
          style={{ float: 'left' }}
          tooltip="Add"
        />
      </React.Fragment>
    );
  };

  return (
    <>
      <Dw1Sidebar />
      <div className="container">
        <br />
        {<Messages ref={messages} />}
        <div className="container is-fluid">
          <br />
          <div className="content-section implementation">
            <Toolbar
              className="p-mb-4"
              left={
                VALUES.PERMISSIONS.ENABLE_CRUD ? leftToolbarTemplate : undefined
              }
            ></Toolbar>
            <DataTable
              value={apiData}
              paginator={true}
              rows={VALUES.TABLE.ROWS}
              rowsPerPageOptions={VALUES.TABLE.ROW_OPTIONS}
              loading={!apiData}
            >
              {mapToTableColumns()}
              {VALUES.PERMISSIONS.ENABLE_CRUD && (
                <Column
                  body={actionTemplate}
                  style={{ textAlign: 'center', width: '8em' }}
                  header="Actions"
                />
              )}
            </DataTable>
          </div>
          {VALUES.PERMISSIONS.ENABLE_CRUD && editorComponent}
        </div>
      </div>
    </>
  );
};

export default Dw1Listing;
