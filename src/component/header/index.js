import React, { memo } from "react";
import styled from "styled-components";
import { tabs } from "../../utils";

const HeaderDiv = styled.div`
  width: 100%;
  height: 50px;
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #c2c8d1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f0f0f1;
  li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lis {
    font-weight: bold;
  }
`;

function Headers({ data = [], tabChange, keys }) {
  if (data.length > 0) {
    let arr = [];
    data.forEach((ele) => {
      if (!arr.some(item => item.type === ele.type)) {
        arr.push(ele);
      }
    });
    data = arr;
  }
  const LiCom = ({ record = {} }) => {
    return (
      <li
        className={keys === record?.type ? "lis" : ""}
        onClick={() => tabChange(record?.type)}
      >
        {tabs[record?.type]}
      </li>
    );
  };

  return (
    <HeaderDiv>
      {data.length > 0 &&
        data.map((ele, idx) => <LiCom key={ele.id + "x"} record={ele} />)}
    </HeaderDiv>
  );
}

export default memo(Headers);
