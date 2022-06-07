import React, { useEffect, useState, useRef, useMemo } from "react";
import styled from "styled-components";
import { Headers, Mains } from "./component";
import { get_alllist } from "./service";
import "./index.css";
import { getUserInfoFunction } from "./utils";

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .getUserInfoFunction3 {
    position: fixed;
    bottom: 5%;
    right: 5%;
    background-color: orange;
    font-weight: bold;
    padding: 10px;
  }
  .getUserInfoFunction2 {
    position: fixed;
    bottom: 10%;
    right: 10%;
    background-color: orange;
    font-weight: bold;
    padding: 10px;
  }
  .getUserInfoFunction1 {
    position: fixed;
    bottom: 15%;
    right: 15%;
    background-color: orange;
    font-weight: bold;
    padding: 10px;
  }
`;

function resolveTimeout(value, delay = 3000) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(value);
    }, delay)
  );
}

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
    return [];
  }, [keys, JSON.stringify(dataSourse)]);

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
      <div
        className="getUserInfoFunction1"
        onClick={getUserInfoFunction(resolveTimeout(`info1`, 5000))}
      >
        点击测试 getUserInfoFunction Id 1
      </div>
      <div
        className="getUserInfoFunction2"
        onClick={getUserInfoFunction(resolveTimeout(`info2`, 2000))}
      >
        控制台看结果 getUserInfoFunction Id 2
      </div>
      <div
        className="getUserInfoFunction3"
        onClick={getUserInfoFunction(resolveTimeout(`info3`, 7000))}
      >
        目前等待10秒 getUserInfoFunction Id 3
      </div>
    </AppDiv>
  );
}

export default App;
