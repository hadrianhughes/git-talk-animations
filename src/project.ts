import {makeProject} from '@motion-canvas/core';

import reorder from './scenes/reorder?scene';
import fixup from './scenes/fixup?scene';

export default makeProject({
  scenes: [reorder, fixup],
});
