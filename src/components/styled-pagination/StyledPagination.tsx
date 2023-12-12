import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

const StyledPagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  ul {
    list-style: none;
    display: flex;
    padding: 0;

    li {
        display: inline-block;
        padding-left: 0;
        cursor: pointer;
        margin: 0 5px;
        padding: 10px 15px;
        border-radius: 5px;
        transition: background-color 0.3s, color 0.3s;
        font-size: 14px;
        list-style: none;
        border: 0.9px solid;

        &a{
            position: relative;
            float: left;
            padding: 6px 12px;
            line-height: 1.42857143;
            text-decoration: none;
            color: #2c689c;
            background-color: #fff;
            border: 1px solid #ddd;
            margin-left: -1px;
        }
      &.break {
        pointer-events: none;
        cursor: default;
      }

      &.active {
        background-color: #007bff;
        color: #fff;
      }

      &:hover {
        background-color: #f5f5f5;
      }

      
    }

    a {
      color: #333;
      text-decoration: none;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

export default StyledPagination;