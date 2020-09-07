export interface IBreakpoints {
  phone?: string;
  phone_lg?: string;
  phone_landscape?: string;
  ipad?: string;
  ipad_pro?: string;
  desktop?: string;
}

export type keys = keyof IBreakpoints | number;

const breakpoints: { [key in keys | number]: string } = {
  phone: '(max-width: 479px)',
  phone_lg: '(min-width: 480px) and (max-width: 564px)',
  phone_landscape: '(min-width: 565px) and (max-width: 767px)',
  ipad: '(min-width: 768px) and (max-width:1023px)',
  ipad_pro: '(min-width: 1024px) and (max-width:1279px)',
  desktop: '(min-width: 1280px)',
};

export default breakpoints;
