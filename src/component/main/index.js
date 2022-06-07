import React, { memo } from "react";
import styled from "styled-components";
import TimerCom from "./../timerCom/index";
const MainDiv = styled.div`
  width: 100%;
  margin-top: 50px;
  flex: 1;

  .list-card {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    main {
      width: 90%;
      height: 80%;
      display: flex;

      .list-card-left {
        width: 29%;
        height: 100%;
        border-radius: 5%;
        border: 1px solid #e8f3ff;
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }

        .list-card-left-mount {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 25%;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: orange;
          color: #ffffff;
        }
      }
      .list-card-right {
        width: 66%;
        margin-left: 5%;
        height: 100%;
        position: relative;

        dd {
          font-size: 14px;
          font-weight: bold;
        }

        dt {
          font-size: 12px;
          color: #8a8e93;
        }
        p {
          position: absolute;
          font-size: 13px;
          bottom: 0;
          span:nth-of-type(1) {
            color: red;
            font-size: 12px;
          }
          span:nth-of-type(2) {
            color: red;
            font-size: 12px;
          }
          span:nth-of-type(3) {
            color: red;
            font-size: 14px;
          }
          span:nth-of-type(4) {
            color: #999999;
            font-size: 12px;
            text-decoration: line-through;
          }
        }

        button {
          margin: 0;
          padding: 0;
          border: none;
          position: absolute;
          bottom: 0;
          right: 0;
          font-size: 16px;
          padding: 3%;
          border-radius: 10px;
          background: #dfc89e;
          color: #000000;
          font-weight: 500;
        }
      }
    }
  }
`;

function Mains({ data = [] }) {
  const Card = ({ record = {} }) => {
    return (
      <div className="list-card">
        <main>
          <div className="list-card-left">
            <img src={record?.imgUrl} alt="" />

            <div className="list-card-left-mount">
              <TimerCom ExpirationTime={record?.Expiration_time} />
            </div>
          </div>
          <div className="list-card-right">
            <dd>{record?.title}</dd>
            <dt>{record?.details}</dt>
            <p>
              <span>当前价</span>
              <span>&nbsp;&yen;&nbsp;</span>
              <span>{record?.Current_price}&nbsp;</span>
              <span>&nbsp;&yen;&nbsp;{record?.original_price}</span>
            </p>
            <button
              onClick={() => {
                window.open("https://2.taobao.com/");
              }}
            >
              去出价
            </button>
          </div>
        </main>
      </div>
    );
  };
  return (
    <MainDiv>
      {data.length > 0 &&
        data.map((ele) => <Card record={ele} key={ele + "index"} />)}
    </MainDiv>
  );
}

export default memo(Mains);
