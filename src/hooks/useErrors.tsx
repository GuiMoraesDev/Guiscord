import React from 'react';

interface IErrorObj {
  message: string;
  isValid?: boolean;
}

interface IErrorsDTO {
  [key: string]: IErrorObj;
}

interface IErrorsProps {
  [key: string]: Omit<IErrorObj, 'isValid'>;
}

export type IErrorReducerAction =
  | {
      state: 'valid';
      payload: keyof IErrorsProps;
    }
  | {
      state: 'invalid';
      payload: keyof IErrorsProps;
    };

const useErrors = (initialState: IErrorsProps) => {
  const parsedInitialState = Object.fromEntries(
    Object.entries(initialState).map((entry) => [
      entry[0],
      { ...entry[1], isValid: true },
    ])
  );

  const errorInitialState: IErrorsDTO = parsedInitialState;

  const errorReducer = (
    prevState: IErrorsDTO,
    action: IErrorReducerAction
  ): IErrorsDTO => {
    let newState;

    switch (action.state) {
      case 'valid':
        newState = {
          ...prevState,
          [action.payload]: {
            ...prevState[action.payload],
            isValid: true,
          },
        };
        break;

      case 'invalid':
        newState = {
          ...prevState,
          [action.payload]: {
            ...prevState[action.payload],
            isValid: false,
          },
        };
        break;

      default:
        throw new Error();
    }

    return newState;
  };

  return React.useReducer(errorReducer, errorInitialState);
};

export default useErrors;
