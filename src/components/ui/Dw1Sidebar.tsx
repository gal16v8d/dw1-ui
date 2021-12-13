import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Sidebar } from 'primereact/sidebar';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildMenuOptions } from './Dw1OptionMenu';

const Dw1Sidebar = (): JSX.Element => {
  const navigate = useNavigate();
  const [visibleLeft, setVisibleLeft] = useState<boolean>(false);

  return (
    <>
      <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
        <Menu model={buildMenuOptions(navigate)} />
      </Sidebar>

      <Button
        icon="pi pi-list"
        onClick={() => setVisibleLeft(true)}
        className="p-mr-2"
      />
    </>
  );
};

export default Dw1Sidebar;
