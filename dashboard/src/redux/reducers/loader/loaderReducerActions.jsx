export const LoaderActionTypes = {
  Set: '[loader] set to loading',
};
export const SetLoading = value => {
  return {
    type: LoaderActionTypes.Set,
    payload: value,
  };
};
