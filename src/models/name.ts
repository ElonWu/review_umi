import { getName } from '@/api/name';
import { Effect, Reducer, Subscription } from 'umi';

export interface NameModelState {
  name: string;
}

export interface NameModelType {
  namespace: 'name';
  state: NameModelState;
  effects: {
    query: Effect;
    update: Effect;
  };
  reducers: {
    save: Reducer<NameModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<NameModelState>;
  };
  subscriptions: { setup: Subscription };
}

const NameModel: NameModelType = {
  namespace: 'name',

  state: {
    name: '',
  },

  effects: {
    *query({ payload }, { call, put }) {},
    *update(payload, { call, put }) {
      const data = yield call(getName, payload);
      yield put({ type: 'save', payload: data });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default NameModel;
