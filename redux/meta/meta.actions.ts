import { MetaActions } from './meta.types';
import { IBreakpoints } from '../../breakpoints';

export interface IsetInitDeviceType {
  type: MetaActions.SET_DEVICE_WIDTH_TYPE;
  payload: keyof IBreakpoints;
}

export const setInitDeviceType = (deviceType: keyof IBreakpoints) => ({
  type: MetaActions.SET_DEVICE_WIDTH_TYPE,
  payload: deviceType,
});
