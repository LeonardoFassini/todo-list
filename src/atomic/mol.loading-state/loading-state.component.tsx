import * as React from 'react';

interface LoadingStateProps {
  loading: boolean;
  data: boolean;
  error: boolean;
  children: JSX.Element[];
}

const StateLoading: React.FC = (props) => <>{props.children}</>;
StateLoading.displayName = 'StateLoading';

const StateError: React.FC = (props) => <>{props.children}</>;
StateError.displayName = 'StateError';

const StateNoData: React.FC = (props) => <>{props.children} </>;
StateNoData.displayName = 'StateNoData';

export const LoadingState = (props: LoadingStateProps) => {
  const showError = props.error;
  const showLoading = !showError && props.loading;
  const showNoData = !showError && !showLoading && !props.data;
  const showData = !showError && !showLoading && !showNoData;

  let Loading;
  let NoData;
  let Error;
  const Data: React.ReactNode[] = [];

  React.Children.map(props.children, (child: JSX.Element) => {
    if (child.type.displayName === StateLoading.displayName) {
      Loading = child;
    } else if (child.type.displayName === StateError.displayName) {
      Error = child;
    } else if (child.type.displayName === StateNoData.displayName) {
      NoData = child;
    } else {
      Data.push(child);
    }
  });

  return (
    <>
      {showError && Error}
      {showLoading && Loading}
      {showNoData && NoData}
      {showData && Data}
    </>
  );
};

LoadingState.Loading = StateLoading;
LoadingState.Error = StateError;
LoadingState.NoData = StateNoData;
