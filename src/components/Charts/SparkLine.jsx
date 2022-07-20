import React from 'react';
import { useSelector } from 'react-redux';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  const currentMode = useSelector(state => state.theme.mode);

  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{ color: currentColor, width: 2 }}
      containerArea={{background: currentMode === 'Dark' ? '#33373E' : '#fff'}}
      dataSource={data}
      xName='x'
      yName='yval'
      type={type}
      markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
      tooltipSettings={{
        visible: true,
        format: '${x} course | revenue ${yval}',
        trackLineSettings: {
          visible: true
        }
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;