import { useListingContext } from '@/provider/listing/Dw1ListingContext';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Sidebar } from 'primereact/sidebar';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildMenuOptions } from './Dw1OptionMenu';

const Dw1Sidebar = (): ReactElement => {
  const { t } = useListingContext();
  const navigate = useNavigate();
  const [visibleLeft, setVisibleLeft] = useState<boolean>(false);

  return (
    <>
      <Button
        data-testid="dw1-sidebar-btn"
        icon="pi pi-list"
        onClick={() => setVisibleLeft(true)}
        className="p-mr-2"
      />
      <Sidebar
        visible={visibleLeft}
        onHide={() => setVisibleLeft(false)}
        role="region"
      >
        <Menu model={buildMenuOptions(t, navigate)} />
      </Sidebar>
    </>
  );
};

export default Dw1Sidebar;
