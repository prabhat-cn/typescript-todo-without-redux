/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */

// test attribute read

interface props {
  wrapper: any;
  val: any;
}

export const findByTestAttr: React.FC<props> = ({
  wrapper,
  val,
  ...props
}: props) => {
  return wrapper.find(`[data-test='${val}']`);
};
