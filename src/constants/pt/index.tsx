import { errors } from './errors';
import { success } from './success';
import { components } from './components';

export const pt = Object.freeze({
  ...errors, ...success, ...components,
})