import isEmpty from 'lodash/isEmpty';
import { Chip } from 'primereact/chip';
import { DataScroller } from 'primereact/datascroller';
import Location from '../../api/model/Location';
import './Dw1MapLocations.css';

type LocationClassName = 'good-chip' | 'bad-chip';

interface Dw1MapLocationsProps {
  locations?: Location[];
  additionalClassName: LocationClassName;
}

const Dw1MapLocations: React.FC<Dw1MapLocationsProps> = ({
  locations,
  additionalClassName,
}): JSX.Element | null => {
  return !isEmpty(locations ?? []) ? (
    <DataScroller
      value={locations}
      itemTemplate={(location: Location) => (
        <Chip
          label={location.name}
          className={`p-mr-2 p-mb-2 ${additionalClassName}`}
        />
      )}
      rows={5}
      buffer={0.5}
    />
  ) : null;
};

export default Dw1MapLocations;
