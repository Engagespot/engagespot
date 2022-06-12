export let Actions = {
  Init: 'Init',
} as any;

export const createAction = (type: string, payload?: Record<string, any>) => ({
  type,
  payload: { ...payload },
});
