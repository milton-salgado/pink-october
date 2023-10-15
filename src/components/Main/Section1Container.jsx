import styled from "styled-components";

const Section1ContainerStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
`;

const Section1ContainerItemStyle = styled.section`
    background-color: #ffa0d9;
    border-radius: 50px;
    width: 90%;
    height: 75px;
    display: flex;
    align-items: center;
    gap: 3ss0px;
`;

const Section1ContainerItemParagraph1Style = styled.p`
    font-size: 30px;
    padding: 0 30px;
`;

const Section1ContainerItemParagraph2Style = styled.p`
    font-size: 20px;
`;

function Section1Container() {
    const numbers = [1, 2, 3, 4, 5];
    const texts = [
        "Nódulo palpável na mama;",
        "Pele avermelhada ou retraída, sem resposta a tratamentos tópicos;",
        "Alterações no mamilo, incluindo a inversão do mamilo ou a saída anormal de secreção;",
        "Dor ou inchaço em parte ou na totalidade das mamas;",
        "Nódulos cervicais ou na axila.",
    ];

    return (
        <>
            <Section1ContainerStyle>
                {numbers.map((number, index) => (
                    <Section1ContainerItemStyle key={index}>
                        <Section1ContainerItemParagraph1Style>
                            {number}
                        </Section1ContainerItemParagraph1Style>
                        <Section1ContainerItemParagraph2Style>
                            {texts[index]}
                        </Section1ContainerItemParagraph2Style>
                    </Section1ContainerItemStyle>
                ))}
            </Section1ContainerStyle>
        </>
    );
}

export default Section1Container;
