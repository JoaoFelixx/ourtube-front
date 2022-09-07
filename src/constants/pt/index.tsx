import { errors } from './errors';
import { success } from './success';
import { components } from './components';
import { containers } from './containers';
 
export const pt = Object.freeze({
  ...errors, ...success, ...components, ...containers,
})