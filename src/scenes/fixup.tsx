import { makeScene2D } from '@motion-canvas/2d';
import { createRef, waitFor } from '@motion-canvas/core';
import { Terminal } from '../components/Terminal';
import { GitLine } from '../components/GitLine';

export default makeScene2D(function* (view) {
  const line1 = createRef<GitLine>();
  const line2 = createRef<GitLine>();
  const line3 = createRef<GitLine>();

  view.add(
    <Terminal width={320} height={120}>
      <GitLine operation="pick" operand="1fa2ddf3 new feature" ref={line1} />
      <GitLine operation="pick" operand="32ac1bef more changes" ref={line2} />
      <GitLine operation="pick" operand="d8ccf134 debug" ref={line3} />
    </Terminal>
  );

  yield* waitFor(0.5);
  yield* line2().changeOperation('fixup');
  yield* waitFor(0.5);
});
