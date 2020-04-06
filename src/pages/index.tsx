import React from 'react';
import styles from './index.less';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button>登录</Button>
    </div>
  );
}
