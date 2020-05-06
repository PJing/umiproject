import React, { useState, createContext } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import MenuComponent from '@/components/Menu';
import ReportListComponent from '@/components/ReportList';
import { useRequest, useToggle } from '@umijs/hooks';
import http from '@/httpConfig/index';
import { history } from 'umi';
import '@/style/home.css';

export const MyContext = createContext(null);
export const ReportContext = createContext(null);

// 项目列表
const getProjectList = async () => {
  return new Promise(resolve => {
    http({
      url: '/pm/admin/project/list',
      method: 'post',
      data: {},
    }).then(res => {
      resolve(res.dataInfo);
    });
  });
};
// 日报列表
const getReportList = async () => {
  return new Promise(resolve => {
    http({
      url: '/pm/admin/projectReport/pageReport',
      method: 'post',
      data: {
        projectId: '',
        pageSize: 10,
        pageNumber: 1,
        bgnTime: 1546272000000,
        endTime: 1577807999999,
        reportUserName: '',
      },
    }).then(res => {
      resolve(res.records);
    });
  });
};

function Home() {
  const [show, setShow] = useState(false);
  const [ProjectList, setProjectList] = useState([]);
  const [ReportList, setReportList] = useState([]);
  // 项目列表
  const {} = useRequest(getProjectList, {
    onSuccess: (res, params) => {
      setProjectList(
        res.map(item => {
          return {
            label: item.name,
            value: item.id,
          };
        }),
      );
    },
  });
  // 日报列表
  const {} = useRequest(getReportList, {
    onSuccess: res => {
      setReportList(res);
    },
  });
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
        rightContent={[
          <Icon
            key="1"
            type="ellipsis"
            onClick={() => {
              setShow(!show);
            }}
          />,
        ]}
      >
        工作台
      </NavBar>
      {/* 项目列表 */}
      <div style={{ display: show ? 'block' : 'none' }}>
        <MyContext.Provider value={{ ProjectList: ProjectList }}>
          <MenuComponent />
          <div
            className="menu-mask"
            onClick={() => {
              setShow(!show);
            }}
          />
        </MyContext.Provider>
      </div>
      {/* 日报列表 */}
      <ReportContext.Provider value={{ ReportList }}>
        <ReportListComponent />
      </ReportContext.Provider>
    </>
  );
}
export default Home;
