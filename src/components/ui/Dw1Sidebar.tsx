import { useListingContext } from '@/provider/listing/Dw1ListingProvider';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildMenuOptions } from './Dw1OptionMenu';

const Dw1Sidebar = (): React.ReactElement => {
  const { t } = useListingContext();
  const navigate = useNavigate();
  const [visibleLeft, setVisibleLeft] = useState<boolean>(false);

  return (
    <>
      <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
        <Menu model={buildMenuOptions(t, navigate)} />
      </Sidebar>

      <Button
        data-testid="dw1-sidebar-btn"
        icon="pi pi-list"
        onClick={() => setVisibleLeft(true)}
        className="p-mr-2"
      />
    </>
  );
};

export default Dw1Sidebar;
