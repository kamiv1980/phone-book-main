export const actionTypes = {
  NEW_ITEM: 'NEW_ITEM',
  EDIT_ITEM: 'EDIT_ITEM',
};

export const newComponent = (component) => ({
  type: actionTypes.NEW_ITEM,
  payload: {
    component,
  },
});

export const newEditItem = (editItem) => ({
  type: actionTypes.EDIT_ITEM,
  payload: {
    editItem,
  },
});
