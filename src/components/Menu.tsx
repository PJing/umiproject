import React, { useContext } from 'react';

import { MyContext } from '@/pages/myReport';
import { Menu } from 'antd-mobile';

function MenuComponent() {
  const { ProjectList } = useContext(MyContext);
  return (
    <>
      {/* <h3>{props.ProjectList}</h3> */}
      <Menu
        className="single-foo-menu"
        data={ProjectList}
        value={['1']}
        level={1}
        height={document.documentElement.clientHeight * 0.4}
      />
    </>
  );
}
export default MenuComponent;
