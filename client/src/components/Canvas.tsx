import React from 'react';
import Draw from './Draw';
import image from '../assets/apple_pie.jpg'; // will be replaced

interface State {
  imgData: object;
  height: number;
  width: number;
}

interface Context {
  drawImage: (arg1: object, arg2: number, arg3: number, arg4: number, arg5: number) => void;
  getImageData: (arg1: number, arg2: number, arg3: number, arg4: number) => object;
}

interface Canvas {
  getContext: (arg1: string) => object;
  width: number;
  height: number;
}

interface Props {
  score: number;
  total: number;
}


class Canvas extends React.Component<Props, State> {
  sourceImage: React.RefObject<any>;
  extractedDataImage: React.RefObject<any>;
  constructor(props: any) {
    super(props);
    this.sourceImage = React.createRef();
    this.extractedDataImage = React.createRef();
    this.state = {
      imgData: {},
      height: 0,
      width: 0,
    }
  }

  prepareContext() {
    const canvas = this.extractedDataImage.current;
    const context = canvas.getContext('2d');
    this.setState({height: canvas.height, width: canvas.width});
    this.paint(context, canvas);
  }

  async paint(context: Context, canvas: Canvas) {
    context.drawImage(this.sourceImage.current, 0, 0, canvas.width, canvas.height);
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    this.setState({imgData});
  }

  render () {
    return (
      <div>
      <canvas
        ref={this.extractedDataImage}
        width="800"
        height="800"
        className="hidden">
        <img
          ref={this.sourceImage}
          onLoad={this.prepareContext.bind(this)}
          src={image}
          width="800"
          height="800"
          alt="Image"
          className="hidden"
        />
      </canvas>
      <Draw
        imgData={this.state.imgData}
        height={this.state.height}
        width={this.state.width}
        score={this.props.score}
        total={this.props.total}
      />
    </div>
    )
  }
}

export default Canvas;