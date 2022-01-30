import React from 'react';

import LoadingIcon from 'assets/icons/loader.svg';

import * as Styled from './styles';

export interface ILoadingDTO {
  loading: boolean;
}

interface ILoadingProps {
  status: ILoadingDTO | null;
}

function Loading({ status }: ILoadingProps): JSX.Element | null {
  if (status?.loading) {
    return (
      <Styled.LoadingComponent>
        <img src={LoadingIcon} alt="loader icon" />
      </Styled.LoadingComponent>
    );
  }

  return null;
}

export { Loading };
