import styles from './index.less';
import { history } from 'umi';
import { Button } from 'antd';

export default function AboutPage() {
  return (
    <div>
      <h1 className={styles.title}>Page About</h1>
      <Button onClick={() => history.push('/')}>首页</Button>
    </div>
  );
}
