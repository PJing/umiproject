import React from 'react';
import '@/style/home.css';
import { history } from 'umi';

function Home() {
  return (
    <>
      {/* <div>
        <span >个人中心</span>
        <span >退出登录</span>
      </div> */}

      <ul className="list">
        <li
          className="item animated bounceInUp"
          onClick={() => {
            history.push('writeReport');
          }}
        >
          <span>写日报</span>
          <i className="iconfont icon-edit icon"></i>
        </li>
        <li
          className="item animated bounceInUp delay-01s"
          onClick={() => {
            history.push('myReport');
          }}
        >
          <span>我的日报</span>
          <i className="iconfont icon-calendar icon"></i>
        </li>
        <li className="item animated bounceInUp delay-02s">
          <span>项目管理</span>
          <i className="iconfont icon-tools-hardware icon"></i>
        </li>
        <li className="item animated bounceInUp delay-03s">
          <span>资源预览</span>
          <i className="iconfont icon-similarproduct icon"></i>
        </li>
      </ul>
    </>
  );
}
export default Home;
