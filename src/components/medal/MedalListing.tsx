import { Column } from 'primereact/column';
import Medal from '../../api/model/Medal';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import MedalService from '../../api/service/MedalService';
import VALUES from '../../constants/Dw1Constants';
import Dw1Listing from '../ui/Dw1Listing';

const MedalListing = (): JSX.Element => {
  const { data } = useGetAll(VALUES.API_OBJECT.MEDAL.QUERY_KEY, MedalService);

  const columns = [
    { field: 'number', header: 'Number' },
    { field: 'name', header: 'Name' },
  ];

  const mapDescriptionProp = (rowData: Medal) => {
    return (
      <div className="container" style={{ display: 'flex' }}>
        <img
          src={`assets/img/medals/${rowData.number}.png`}
          alt={'Medal'}
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

export default MedalListing;
