import React from 'react';
import {Stage, Layer, Star} from 'react-konva';
import Konva from 'konva';
import {compose, withHandlers, withProps} from 'recompose';

function Canvas({handleDragStart, handleDragEnd, width, height}) {
  return (
    <Stage width={width} height={height/2}>
      <Layer>
        {[1,2,3,4].map(i => (
          <Star
            key={i*2}
            x={Math.random() * width}
            y={Math.random() * height/2}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
            fill="#89b717"
            opacity={0.8}
            draggable
            rotation={Math.random() * 180}
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.6}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </Layer>
    </Stage>
  );
}

const enhance = compose(
  withProps({width: window.innerWidth, height: window.innerHeight}),
  withHandlers({
    handleDragStart: _props => e => {
      e.target.setAttrs({
        shadowOffset: {
          x: 15,
          y: 15
        },
        scaleX: 1.1,
        scaleY: 1.1
      });
    },
    handleDragEnd: _props => e => {
      e.target.to({
        duration: 0.5,
        easing: Konva.Easings.ElasticEaseOut,
        scaleX: 1,
        scaleY: 1,
        shadowOffsetX: 5,
        shadowOffsetY: 5
      });
    }
  })
);

export default enhance(Canvas);
