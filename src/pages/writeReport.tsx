import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { history } from 'umi';

function WriteReport() {
  return (
    <>
      <NavBar
        mode="dark"
        leftContent={
          <Icon
            type="left"
            onClick={() => {
              history.goBack();
            }}
          />
        }
      >
        写日报
      </NavBar>
    </>
  );
}
export default WriteReport;
