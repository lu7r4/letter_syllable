import styled from "styled-components";

const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];

const Track = styled.div`
  margin: 0 30px;
  width: 100%;
  height: 20px;
  background-color: #222;
  border-radius: 10px;
  box-shadow: inset 0 0 5px #000;
`;

const Thumb = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background: linear-gradient(90deg, ${props => colors[props.index]}, ${props => colors[props.index + 1]});
  box-shadow: -9px 0px 16px -3px rgba(256, 256, 256, 0.56) inset;
  border-radius: 8px;
  transition: width 0.3s ease-in-out;
`;

function ProgressBar(props) {
  const colorIndex = Math.floor(props.percentage / (100 / (colors.length - 1)));

  return (
    <Track>
      <Thumb className="thumb" percentage={props.percentage} index={colorIndex} />
    </Track>
  );
}

export { ProgressBar };
