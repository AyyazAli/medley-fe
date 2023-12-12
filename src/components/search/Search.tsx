import React, { useState } from 'react';
import styled from 'styled-components';

interface SearchPorps {
    onSearchClick: (searchTerm: string) => void;
}
const Search = (props: SearchPorps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Container>
            <SearchInput
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <SearchButton onClick={() => props.onSearchClick(searchTerm)}>Search</SearchButton>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  place-content: flex-end;
  align-items: center;
  margin: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Search;