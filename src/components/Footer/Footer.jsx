import styled from "styled-components";
import breastCancerMonthImage from "../../assets/images/cancer-de-mama.png";

const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffa0d9;
    padding: 1%;
`;

const FooterAnchorStyle = styled.a`
    font-size: 25px;
    font-style: italic;
    color: white;
`;

const FooterFigureStyle = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterFigureImageStyle = styled.img`
    width: 230px;
    height: 175px;
`;

function Footer() {
    return (
        <>
            <FooterStyle>
                <FooterAnchorStyle href="https://www.gov.br/inca/pt-br">
                    Instituto Nacional de Câncer - INCA
                </FooterAnchorStyle>
                <FooterFigureStyle>
                    <FooterFigureImageStyle src={breastCancerMonthImage} />
                </FooterFigureStyle>
                <FooterAnchorStyle href="https://www.uicc.org/events/special-focus-dialogue-rethinking-pink-october-how-increase-engagement-public-virtually">
                    Union for International Cancer Control (UICC)
                </FooterAnchorStyle>
            </FooterStyle>
        </>
    );
}

export default Footer;
