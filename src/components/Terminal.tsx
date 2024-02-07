import { createRef } from '@motion-canvas/core';
import { Circle, Node, NodeProps, Rect, signal } from '@motion-canvas/2d';

const colors = {
  background: '#3b3a3d',
  red: '#ff6159',
  amber: '#ffbd2e',
  green: '#28c941'
};

export interface TerminalProps extends NodeProps {
  width: number;
  height: number;
}

export class Terminal extends Node {
  @signal()
  public declare readonly width: number;

  @signal()
  public declare readonly height: number;

  private readonly container = createRef<Rect>();

  public constructor(props?: TerminalProps) {
    super(props);

    this.width = props.width;
    this.height = props.height;

    this.add(
      <Rect
        ref={this.container}
        radius={10}
        size={[this.width, this.height]}
        fill={colors.background}
        layout
        justifyContent="start"
        alignItems="start"
        padding={10}
      >
        <Node>
          <Circle fill={colors.red} size={[20,20]} margin={[0,5,0,0]} />
          <Circle fill={colors.amber} size={[20,20]} margin={[0,5,0,0]} />
          <Circle fill={colors.green} size={[20,20]} />
        </Node>
      </Rect>
    );
  }
}
