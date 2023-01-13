import Location from 'api/model/mongo/Location';
import isEmpty from 'lodash/isEmpty';
import { Chip } from 'primereact/chip';
import { DataScroller } from 'primereact/datascroller';
import './Dw1MapLocations.css';

type LocationClassName = 'good-chip' | 'bad-chip';

interface Dw1MapLocationsProps {
  locations?: Location[];
  identifier: string;
  additionalClassName: LocationClassName;
}

const Dw1MapLocations: React.FC<Dw1MapLocationsProps> = ({
  locations,
  identifier,
  additionalClassName,
}): JSX.Element | null =>
  !isEmpty(locations ?? []) ? (
    <DataScroller
      data-testid={`ds-${identifier}`}
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

export default Dw1MapLocations;
