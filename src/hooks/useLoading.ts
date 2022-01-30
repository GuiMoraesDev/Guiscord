import { useReducer } from 'react';

import { ILoadingDTO } from 'components/Loading';

export type ILoadingReducerAction =
  | {
      state: 'initial';
    }
  | {
      state: 'loading';
    }
  | {
      state: 'error';
    };

const useLoading = () => {
  const loadingInitialState: ILoadingDTO = {
    loading: false,
  };

  const loadingReducer = (
    prevState: ILoadingDTO,
    action: ILoadingReducerAction
  ) => {
    let newState;

    switch (action.state) {
      case 'initial':
        newState = {
          loading: false,
        };
        break;

      case 'loading':
        newState = {
          loading: true,
        };
        break;

      default:
        throw new Error();
    }

    return newState;
  };

  return useReducer(loadingReducer, loadingInitialState);
};

export default useLoading;
