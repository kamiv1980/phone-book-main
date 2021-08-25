export const actionTypes = {
  NEW_ITEM: 'NEW_ITEM',
  NEW_COMPONENT: 'NEW_COMPONENT',
};

export const newComponent = (component) => ({
  type: actionTypes.NEW_COMPONENT,
  payload: {
    component,
  },
});

export const newEditItem = (editItem) => ({
  type: actionTypes.NEW_ITEM,
  payload: {
    editItem,
  },
});
