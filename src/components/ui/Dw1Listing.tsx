import { Button } from 'primereact/button';
import { Column, ColumnProps } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Messages } from 'primereact/messages';
import { Toolbar } from 'primereact/toolbar';
import React from 'react';
import CrudData from '../../api/model/crud/CrudData';
import ApiData from '../../api/model/types/ApiData.types';
import VALUES from '../../constants/Dw1Constants';
import Dw1Sidebar from './Dw1Sidebar';
import Dw1Spinner from './Dw1Spinner';

export interface EditorProps {
  crudData: CrudData;
  messages: React.MutableRefObject<null>;
}

interface ListingProps {
  apiData?: ApiData[];
  columns?: ColumnProps[];
  additionalColumn?: boolean;
  additionalColumnBody?: JSX.Element;
  editorComponent?: JSX.Element;
}

const Dw1Listing: React.FC<ListingProps> = ({
  apiData,
  columns,
  additionalColumn,
  additionalColumnBody,
  editorComponent,
}) => {
  const messages = React.useRef(null);
  const [crudData, setCrudData] = React.useState<CrudData>({});

  if (!apiData) {
    return <Dw1Spinner />;
  }

  const mapToTableColumns = () => {
    return (
      columns &&
      columns.map((col: ColumnProps, i: number) => (
        <Column
          key={`${col.field}-${i}`}
          field={col.field}
          header={col.header}
          sortable={true}
        />
      ))
    );
  };

  const addData = () => {
    setCrudData({
      creating: true,
    });
  };

  const editData = (rowData: ApiData) => {
    setCrudData({
      data: rowData,
      updating: true,
    });
  };

  const deleteData = (rowData: ApiData) => {
    setCrudData({
      data: rowData,
      deleting: true,
    });
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
              {additionalColumn && additionalColumnBody}
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
