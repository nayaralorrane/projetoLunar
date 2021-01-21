import React from "react";
import styled from "styled-components";

import { MenuItems } from "./pages/Home/MenuItems";

import SearchIcon from "@material-ui/icons/Search";

const Container = styled.div``;
const NavBar = styled.div`
  height: 187px;
  background-color: #5b6ba1;
  display: flex;
`;

const ButtonNavBar = styled.div`
  font-size: 25px;
  color: #fff;
  margin: 0 10px;
  font-weight: 600;
`;

const ButtonsContainer = styled.div`
  background-color: #5b6ba1;
  display: flex;
  justify-content: center;
  align-itens: center;
  cursor: pointer;
`;

const Search = styled.div`
  width: 300px;
  position: relative;
  display: flex;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.small ? 5 : undefined,
}))`
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
  padding: ${(props) => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`;

// const SearchButton = styled.div`
//   width: 40px;
//   height: 36px;
//   border: 1px solid #00b4cc;
//   background: #00b4cc;
//   text-align: center;
//   color: #fff;
//   border-radius: 0 5px 5px 0;
//   cursor: pointer;
//   font-size: 20px;
// `;

const SearchBar = () => {
  return (
    <Search>
      <Input placeholder="Pesquise por um item" />
      <SearchIcon />
    </Search>
  );
};

const Home = () => {
  return (
    <Container>
      <NavBar>
        <span>Lunar logo</span>
        <SearchBar />
      </NavBar>
      <ButtonsContainer>
        {MenuItems.map((item) => (
          <ButtonNavBar onClick={() => console.log(`ir para rota ${item.url}`)}>
            {item.title}
          </ButtonNavBar>
        ))}
      </ButtonsContainer>
    </Container>
  );
};

export default Home;
