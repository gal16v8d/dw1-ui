import Location from '@/api/model/mongo/Location';
import { Chip } from 'primereact/chip';
import { DataScroller } from 'primereact/datascroller';
import type { FC, ReactElement } from 'react';
import './Dw1MapLocations.css';

type LocationClassName = 'good-chip' | 'bad-chip';

interface Dw1MapLocationsProps {
  locations?: Location[];
  identifier: string;
  additionalClassName: LocationClassName;
}

const Dw1MapLocations: FC<Dw1MapLocationsProps> = ({
  locations,
  identifier,
  additionalClassName,
}): ReactElement | null => {
  const renderChip = (location: Location): ReactElement => (
    <Chip
      label={location.name}
      className={`p-mr-2 p-mb-2 ${additionalClassName}`}
    />
  );

  return (locations ?? []).length > 0 ? (
    <DataScroller
      data-testid={`ds-${identifier}`}
      value={locations}
      itemTemplate={renderChip}
      rows={5}
      buffer={0.5}
    />
  ) : null;
};

export default Dw1MapLocations;
