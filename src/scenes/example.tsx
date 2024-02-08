import { Circle, makeScene2D, Layout, Txt } from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';
import { Terminal } from '../components/Terminal';
import { GitLine } from '../components/GitLine';

export default makeScene2D(function* (view) {
  // Create your animations here

  const terminal = createRef<Terminal>();

  view.add(
    <Terminal width={300} height={120}>
      <GitLine operation="pick" operand="0e33fa21 new feature" />
      <GitLine operation="pick" operand="61ab2fcc debug" />
      <GitLine operation="pick" operand="b2cd143a refactor" />
    </Terminal>
  );
});
