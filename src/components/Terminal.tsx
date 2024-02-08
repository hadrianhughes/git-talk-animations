import { createRef, SignalValue } from '@motion-canvas/core';
import { Circle, ComponentChildren, Layout, Node, NodeProps, Rect, signal } from '@motion-canvas/2d';

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
        wrap="wrap"
        justifyContent="start"
        alignContent="start"
        padding={10}
        gap={10}
      >
        <Layout width="100%" gap={5}>
          <Circle fill={colors.red} size={[20,20]} />
          <Circle fill={colors.amber} size={[20,20]} />
          <Circle fill={colors.green} size={[20,20]} />
        </Layout>
        <Layout width="100%" wrap="wrap">
          {props.children}
        </Layout>
      </Rect>
    );
  }
}
