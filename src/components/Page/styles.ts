import styled from 'styled-components';
import model3 from '../../assets/model3.jpg'
import modelY from '../../assets/modelY.jpeg'
import modelS from '../../assets/modelS.jpeg'
import modelX from '../../assets/modelX.jpg'
import solarPanels from '../../assets/solarPanels.jpeg'
import solarRoof from '../../assets/solarRoof.jpg'
import accessories from '../../assets/accessories.jpeg'
    
export const Container = styled.div`
.colored:nth-child(1) {
    background-image: url(${model3});
    background-position: center;
    background-size: cover;
}
.colored:nth-child(2) {
    background-image: url(${modelY});
    background-position: center;
    background-size: cover;
}
.colored:nth-child(3) {
    background-image: url(${modelS});
    background-position: top;
    background-size: cover;
}
.colored:nth-child(4) {
    background-image: url(${modelX});
    background-position: center;
    background-size: cover;
}
.colored:nth-child(5) {
    background-image: url(${solarPanels});
    background-position: center;
    background-size: cover;
}
.colored:nth-child(6) {
    background-image: url(${solarRoof});
    background-position: center;
    background-size: cover;
}
.colored:nth-child(7) {
    background-image: url(${accessories});
    background-position: center;
    background-size: cover;
}
`;

export const Spacer = styled.div`
    height: 15vh;
    background: #fff;
`
