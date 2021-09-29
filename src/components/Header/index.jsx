/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { ImCross, ImMenu3 } from "react-icons/im";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";

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
              <a href="/#como">
                <a>Como funciona</a>
              </a>
            </li>
            <li>
              <Link to="/termos">
                <a>Termos de uso</a>
              </Link>
            </li>
            <li>
              <Link to="/politica">
                <a>Política de privacidade</a>
              </Link>
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
