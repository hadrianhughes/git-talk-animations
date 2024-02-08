import { Circle, makeScene2D, Layout, Txt } from '@motion-canvas/2d';
import { all, createRef } from '@motion-canvas/core';
import { Terminal } from '../components/Terminal';
import { GitLine } from '../components/GitLine';

const LINE_HEIGHT = 22;

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

  yield* all(
    line1().position.y(LINE_HEIGHT, 1),
    line2().position.y(-LINE_HEIGHT, 1),
  );

  yield* all(
    line1().position.y(LINE_HEIGHT * 2, 1),
    line3().position.y(-LINE_HEIGHT, 1)
  );

  yield* all(
    line1().position.y(0, 1),
    line2().position.y(LINE_HEIGHT, 1)
  );

  yield* all(
    line2().position.y(0, 1),
    line3().position.y(0, 1),
  );
});
