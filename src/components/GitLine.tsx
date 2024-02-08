import { createRef } from '@motion-canvas/core';
import { Layout, Node, NodeProps, Txt } from '@motion-canvas/2d';

export interface GitLineProps extends NodeProps {
  operation: string;
  operand: string;
}

export class GitLine extends Node {
  public constructor(props?: GitLineProps) {
    super(props);

    this.add(
      <Layout>
        <Txt fontSize={18} fill="#f7c736" fontFamily="Courier">{props.operation}&nbsp;</Txt>
        <Txt fontSize={18} fill="#fff" fontFamily="Courier">{props.operand}</Txt>
      </Layout>
    );
  }
}
