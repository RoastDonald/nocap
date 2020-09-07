import { MetaActions, MetaTypes } from './meta.types';
import { IBreakpoints } from '../../breakpoints';

const INITIAL_STATE: { deviceWidthType: keyof IBreakpoints } = {
  deviceWidthType: 'desktop',
};

export default (prevState = INITIAL_STATE, action: MetaTypes) => {
  switch (action.type) {
    case MetaActions.SET_DEVICE_WIDTH_TYPE:
      return {
        ...prevState,
        deviceWidthType: action.payload,
      };
    default:
      return prevState;
  }
};
