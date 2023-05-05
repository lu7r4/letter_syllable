import styled from "styled-components";

/* прогрессбар с "шагами" */
const Track = styled.div`
margin: 0 30px;
width: 100%;
height: 20px;
background-color: #222;
border-radius: 10px;
box-shadow: inset 0 0 5px #000;
`
const Thumb = styled.div`
width: ${props => props.percentage}%;
height: 100%;
background-color: #6bccf9;
box-shadow: -9px 0px 16px -3px rgba(256, 256, 256, 0.56) inset;
border-radius: 8px;
transition: width 0.3s ease-in-out;
`


function ProgressBar(props) {
    return (
        <Track>
            <Thumb className="thumb" percentage={props.percentage}/>
        </Track>
    );
}

export {ProgressBar}