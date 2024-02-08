import { createRef, waitFor } from '@motion-canvas/core';
import { Layout, Node, NodeProps, signal, Txt } from '@motion-canvas/2d';

export interface GitLineProps extends NodeProps {
  operation: string;
  operand: string;
}

export class GitLine extends Node {
  @signal()
  public declare operation: string;

  @signal()
  public declare readonly operand: string;

  private readonly operationRef = createRef<Txt>();
  private readonly operandRef = createRef<Txt>();

  public constructor(props?: GitLineProps) {
    super(props);

    this.operation = props.operation;
    this.operand = props.operand;

    this.add(
      <Layout>
        <Txt
          fontSize={18}
          fill="#f7c736"
          fontFamily="Courier"
          margin={[0,10,0,0]}
          ref={this.operationRef}
        >
          {this.operation}
        </Txt>
        <Txt
          fontSize={18}
          fill="#fff"
          fontFamily="Courier"
          ref={this.operandRef}
        >
          {this.operand}
        </Txt>
      </Layout>
    );
  }

  public *changeOperation(operation: string) {
    let op = this.operation;

    while (op.length > 0) {
      op = op.slice(0, op.length - 1);

      yield* waitFor(0.1);
      this.operationRef().children(op)
    }

    for (const char of operation) {
      op += char;

      yield* waitFor(0.1);
      this.operationRef().children(op);
    }

    this.operation = operation;
  }
}
