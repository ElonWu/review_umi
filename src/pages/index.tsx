import React, { useCallback } from 'react';
import type { FC } from 'react';
import { history, Link } from 'umi';
import { Button } from 'antd';
import { NameModelState, ConnectProps, Loading, connect } from 'umi';

interface PageProps extends ConnectProps {
  name: NameModelState;
  loading: boolean;
}

const IndexPage: FC<PageProps> = ({ name, dispatch }) => {
  const renameFromApi = useCallback(() => {
    dispatch &&
      dispatch({
        type: 'name/update',
      });
  }, []);

  const rename = useCallback((name) => {
    dispatch &&
      dispatch({
        type: 'name/save',
        payload: { name },
      });
  }, []);

  return (
    <div>
      <h4>Hello {name?.name}</h4>
      <Button onClick={renameFromApi}>Rename From Api</Button>
      <Button onClick={() => rename('ElonWu' + Math.floor(Math.random() * 10))}>
        Rename
      </Button>
      <Link to="/about">About</Link>
    </div>
  );
};

export default connect(
  ({ name, loading }: { name: NameModelState; loading: Loading }) => ({
    name,
    loading: loading.models.name,
  }),
)(IndexPage);
