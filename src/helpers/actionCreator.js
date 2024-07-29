export const actionCreator = (actionType) => (payload) => ({
  type: actionType,
  payload
});
