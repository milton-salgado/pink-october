import styled from "styled-components";
import bannerImage from "../../assets/images/outubro-rosa-banner.png";
import Section1ContainerStyle from "./Section1Container.jsx";

const MainStyle = styled.main`
    display: flex;
    justify-content: space-between;
    padding: 2% 0;
`;

const SectionStyle = styled.section`
    display: flex;
    padding: 2%;
    width: 50%;
`;

const Section1Style = styled(SectionStyle)`
    flex-direction: column;
    align-items: center;
    font-style: italic;
    gap: 40px;
`;

const Section2Style = styled(SectionStyle)`
    justify-content: center;
    align-items: center;
`;

const Section1ParagraphStyle = styled.p`
    font-size: 30px;
    color: #ffa0d9;
    width: 90%;
`;

const Section2FigureStyle = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Section2ImageStyle = styled.img`
    width: 100%;
`;

function Main() {
    return (
        <>
            <MainStyle>
                <Section1Style>
                    <Section1ParagraphStyle>
                        Os principais sinais de alerta ou sintomas do câncer de
                        mama são:
                    </Section1ParagraphStyle>
                    <Section1ContainerStyle></Section1ContainerStyle>
                </Section1Style>
                <Section2Style>
                    <Section2FigureStyle>
                        <Section2ImageStyle
                            src={bannerImage}
                            alt="Imagem especial em homenagem oa mês oficial do combate ao câncer de mama."
                        />
                    </Section2FigureStyle>
                </Section2Style>
            </MainStyle>
        </>
    );
}

export default Main;
