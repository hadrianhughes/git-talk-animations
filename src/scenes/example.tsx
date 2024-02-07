import {Circle, makeScene2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';
import { Terminal } from '../components/Terminal';

export default makeScene2D(function* (view) {
  // Create your animations here

  const terminal = createRef<Terminal>();

  view.add(<Terminal width={300} height={200} />);

  //yield* circle().scale(2, 2).to(1, 2);
});
