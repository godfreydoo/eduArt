import React from 'react';

interface Props {
  imgData: object;
  height: number;
  width: number;
  score: number;
  total: number;
}

interface State {
  drawProgress: number;
  context: Context;
  canvas: Canvas;
  height: number;
  width: number;
}

interface Canvas {
  height?: number;
  width?: number;
}

interface Context {
  putImageData?: (arg1: object, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => void;
}

class Draw extends React.Component<Props, State> {
  newImage: React.RefObject<any>;
  constructor(props: Props) {
    super(props);
    this.newImage = React.createRef();
    this.state = {
      drawProgress: 1,
      context: {},
      canvas: {},
      height: 0,
      width: 0,
    }
  }

  componentDidMount() {
    this.prepareContext();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.score !== this.props.score) {
      this.putDataOnCanvas();
    }
  }

  async prepareContext () {
    try {
      var canvas = this.newImage.current;
      var context = await canvas.getContext('2d');
      this.setState({context, canvas});
    } catch (err) {
      console.error(err);
    }
  }

  putDataOnCanvas () {
    const dimension = this.props.height * ((this.props.total - this.state.drawProgress) / this.props.total);
    const height = dimension;
    const weight = dimension;

    this.state.context.putImageData(this.props.imgData, 0, 0, height, weight, this.state.canvas.width, this.state.canvas.height);
    this.setState({drawProgress: this.state.drawProgress + 1});
  }

  render () {
    return (
      <>
        <canvas
          ref={this.newImage}
          className="image-to-draw"
          width="800"
          height="800"
        />
      </>
    )
  }
}

export default Draw;