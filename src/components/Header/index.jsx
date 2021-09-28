import { useState } from "react";
import { ImCross, ImMenu3 } from "react-icons/im";
import logoImg from "../../assets/logo.svg";

import { HeaderContainer, Menu, HeaderNav } from "./styles";

export function Header() {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <>
      <HeaderContainer>
        <HeaderNav>
          <img src={logoImg} alt="Logo Tion App" />
          <Menu
            onClick={() => menuMobile && setMenuMobile(false)}
            className={menuMobile && "active"}
          >
            {menuMobile && (
              <ImCross
                style={{ position: "fixed", top: 50, right: 30 }}
                size="1.25rem"
                color="var(--branco)"
                onClick={() => setMenuMobile(false)}
              />
            )}
            <li>
              <a href="#como">Como funciona</a>
            </li>
            <li>
              <a href="#bibi">Termos de uso</a>
            </li>
            <li>
              <a href="#bibi">Política de privacidade</a>
            </li>
           
          </Menu>

          <ImMenu3
            className="icone-menu-mobile"
            size="3rem"
            color="var(--branco)"
            onClick={() =>
              !menuMobile ? setMenuMobile(true) : setMenuMobile(false)
            }
          />
        </HeaderNav>
      </HeaderContainer>
    </>
  );
}
