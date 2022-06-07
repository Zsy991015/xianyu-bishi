import React, { useEffect, useState, useRef, useMemo } from "react";
import styled from "styled-components";
import { Headers, Mains } from "./component";
import { get_alllist } from "./service";
import "./index.css";

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [dataSourse, setDataSourse] = useState([]);
  const [keys, setkeys] = useState("1");

  let ref = useRef(false); // 初始化只执行一次
  useEffect(() => {
    if (ref.current) return;
    ref.current = true;
    getAllList();
  }, []);

  const filterData = useMemo(() => {
    if (dataSourse?.length > 0) {
      return dataSourse.filter((ele) => ele.type === keys);
    }
    return []
  }, [keys,JSON.stringify(dataSourse)]);

  const getAllList = () => {
    get_alllist().then((res) => {
      const { data = [] } = res;
      setDataSourse(data);
    });
  };

  const tabChange = (type) => {
    setkeys(type);
  };

  return (
    <AppDiv>
      <Headers data={dataSourse} tabChange={tabChange} keys={keys} />
      <Mains data={filterData} />
    </AppDiv>
  );
}

export default App;
