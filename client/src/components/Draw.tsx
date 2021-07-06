import React from 'react';

interface Props {
  imgData: object;
  height: number;
  width: number;
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

  // draw image based on total score

  async prepareContext () {
    try {
      var canvas = this.newImage.current;
      var context = await canvas.getContext('2d');
      this.setState({context, canvas});
    } catch (err) {
      console.error(err);
    }
  }

  async putDataOnCanvas (height: number, width: number) {
    // draw image based on total score

    this.state.context.putImageData(this.props.imgData, 0, 0, height, width, this.state.canvas.width, this.state.canvas.height);
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