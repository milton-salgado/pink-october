import styled from "styled-components";
import logoImage from "../../assets/images/outubro-rosa-logo.png";

const HeaderStyle = styled.header`
    background-color: #ffa0d9;
    height: 20vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const HeaderFigureStyle = styled.figure`
    justify-content: center;
    align-items: center;
`;

const HeaderFigureImageStyle = styled.img`
    width: 150px;
    height: 100px;
`;

const HeaderNavStyle = styled.nav``;

const HeaderNavUnorderedListStyle = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
`;

const HeaderNavUnorderedListItemStyle = styled.li`
    color: white;
    font-size: 30px;
    font-style: italic;
`;

function Header() {
    return (
        <>
            <HeaderStyle>
                <HeaderFigureStyle>
                    <HeaderFigureImageStyle
                        src={logoImage}
                        alt="Imagem de um laço rosa"
                    />
                </HeaderFigureStyle>

                <HeaderNavStyle>
                    <HeaderNavUnorderedListStyle>
                        <HeaderNavUnorderedListItemStyle>
                            CARTILHA
                        </HeaderNavUnorderedListItemStyle>
                        <HeaderNavUnorderedListItemStyle>
                            FOLHETO COLO DO ÚTERO
                        </HeaderNavUnorderedListItemStyle>
                        <HeaderNavUnorderedListItemStyle>
                            FOLHETO MAMA
                        </HeaderNavUnorderedListItemStyle>
                        <HeaderNavUnorderedListItemStyle>
                            KIT MATERIAIS
                        </HeaderNavUnorderedListItemStyle>
                    </HeaderNavUnorderedListStyle>
                </HeaderNavStyle>
            </HeaderStyle>
        </>
    );
}

export default Header;
