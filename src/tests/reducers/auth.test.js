import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, '@@INIT');
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc123'
  };
  const state = authReducer(undefined, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid for login', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'anything' }, action);
  expect(state).toEqual({});
});