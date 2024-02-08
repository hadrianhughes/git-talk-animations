import { Circle, makeScene2D, Layout, Txt } from '@motion-canvas/2d';
import { all, createRef, map, tween, waitFor } from '@motion-canvas/core';
import { Terminal } from '../components/Terminal';
import { GitLine } from '../components/GitLine';

const LINE_HEIGHT = 22;
const TIMING = 0.333;
const INTERVAL = 0.2;

export default makeScene2D(function* (view) {
  // Create your animations here

  const terminal = createRef<Terminal>();
  const line1 = createRef<GitLine>();
  const line2 = createRef<GitLine>();
  const line3 = createRef<GitLine>();

  view.add(
    <Terminal width={300} height={120}>
      <GitLine operation="pick" operand="0e33fa21 new feature" ref={line1} />
      <GitLine operation="pick" operand="61ab2fcc debug" ref={line2} />
      <GitLine operation="pick" operand="b2cd143a refactor" ref={line3} />
    </Terminal>
  );

  yield* tween(TIMING, value => {
    line1().position.y(map(0, LINE_HEIGHT, value));
    line2().position.y(map(0, -LINE_HEIGHT, value));
  });

  yield* waitFor(INTERVAL);

  yield* tween(TIMING, value => {
    line1().position.y(map(LINE_HEIGHT, LINE_HEIGHT * 2, value));
    line3().position.y(map(0, -LINE_HEIGHT, value));
  });

  yield* waitFor(INTERVAL);

  yield* tween(TIMING, value => {
    line1().position.y(map(LINE_HEIGHT * 2, 0, value));
    line2().position.y(map(-LINE_HEIGHT, LINE_HEIGHT, value));
  });

  yield* waitFor(INTERVAL);

  yield* tween(TIMING, value => {
    line2().position.y(map(LINE_HEIGHT, 0, value));
    line3().position.y(map(-LINE_HEIGHT, 0, value));
  });

  yield* waitFor(INTERVAL);
});
