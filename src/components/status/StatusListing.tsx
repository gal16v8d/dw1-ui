import { Column } from 'primereact/column';
import Status from '../../api/model/Status';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import StatusService from '../../api/service/StatusService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const StatusListing = (): JSX.Element => {
  const { data } = useGetAll(VALUES.API_OBJECT.STATUS.QUERY_KEY, StatusService);

  const columns = [{ field: 'name', header: 'Name' }];

  const mapDescriptionProp = (rowData: Status) => {
    return (
      <div className="container" style={{ display: 'flex' }}>
        <img
          src={`assets/img/medals/${rowData.name}.png`}
          alt={'Status Img'}
          width="32"
          height="32"
        />
        &emsp;
        <p className="p-m-0" style={{ lineHeight: '1.5' }}>
          {rowData.description}
        </p>
      </div>
    );
  };

  return (
    <Dw1Listing
      apiData={data}
      columns={columns}
      additionalColumn={true}
      additionalColumnBody={
        <Column body={mapDescriptionProp} header={'Description'} />
      }
    />
  );
};

export default StatusListing;
