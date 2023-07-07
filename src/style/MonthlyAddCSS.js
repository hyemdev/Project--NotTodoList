import styled from "@emotion/styled";

export const MonthlyAddWrap = styled.div`
  position: relative;
  width: 100%;
  min-width: 500px;
  max-width: 950px;
  height: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const ListTemp = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  height: 350px;
  overflow-y: auto;
`;

export const AddTitleDiv = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: lightblue; */
`;

export const AddTitle = styled.h2`
  text-align: center;
  color: #475569;
  font-weight: 700;
  font-size: 24px;
  padding: 10px;
  margin: 10px 0;
  padding: 10px;
`;

export const AddModalClose = styled.div`
  display: flex;
  justify-content: center;
`;

////////////////////////////////
// 한달목표 리스트(Table head)
export const AddTable = styled.table`
  width: 100%;
  /* text-align: center; */
  color: #1e293b;
`;
export const AddTableThead = styled.thead`
  font-size: 14px;
  color: #475569;
  background: #e2e8f0;
  padding: 0 3px;
`;
export const AddTableTr = styled.tr`
  /* width: 100%; */
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

export const AddTableThDate = styled.th`
  padding: 12px 3px;
  width: 20%;
  text-align: center;
  letter-spacing: -0.8px;
`;
export const AddTableThTitle = styled.th`
  padding: 12px 3px;
  width: 30%;
  text-align: center;
`;
export const AddTableThNumber = styled.th`
  padding: 12px 3px;
  width: 15%;
  text-align: center;
`;
export const AddTableThBtn = styled.th`
  padding: 12px 3px;
  width: 10%;
`;

/////////////////////////////
// 한달목표 리스트(List body)

export const AddListTbody = styled.tbody`
  /* width: 90%; */
  font-size: 14px;
  color: #475569;
  padding: 0 3px;
`;
export const AddListTr = styled.tr`
  width: 900px;
  max-width: 1000px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px dotted #cbd5e1;
`;
export const AddListTdDate = styled.td`
  padding: 12px 3px;
  width: 20%;
  text-align: center;
  letter-spacing: -0.8px;
`;
export const AddListTdTitle = styled.td`
  padding: 12px 3px;
  width: 30%;
  text-align: center;
`;
export const AddListTdNumber = styled.td`
  padding: 12px 3px;
  width: 15%;
  text-align: center;
`;
export const AddListBtnDiv = styled.td`
  padding: 5px 3px;
  width: 70px;
  height: 35px;
  margin: 0 auto;
`;
export const AddListbtn = styled.button`
  padding: 5px 3px;
  width: 100%;
  height: 35px;
  margin: 4px;
  margin-right: 5px;
`;

export const AddTableThContent = styled.th`
  padding: 5px 3px;
  text-align: center;
  width: 150px;
`;

//리스트(List body) 수정 중
export const ListTitleEdit = styled.input`
  padding: 8px 3px;
  width: 250px;
  text-align: center;
  border: 1px solid #dddddd;
  border-radius: 5px;
  line-height: 12px;
  height: 38px;
`;

export const ListSelectEdit = styled.div`
  width: 100px;
  margin: 0 auto;
`;

export const ListNumEdit = styled.input`
  padding: 8px 3px;
  width: 100px;
  text-align: center;
  border: 1px solid #dddddd;
  border-radius: 5px;
  line-height: 12px;
  height: 38px;
`;

// 한달목표 입력 form
export const AddFormWrap = styled.div`
  width: 100%;
  padding: 10px;
  margin-top: 10px;

  & > Form {
    display: flex;
    justify-content: space-around;
    margin: 0 10px;
    & > Button {
    }
  }
`;

export const AddFormTitle = styled.div`
  width: 300px;
`;

export const FormLabel = styled.p`
  color: #1e293b;
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 5px;
`;
export const SaveBtn = styled.div`
  margin-top: 26px;
`;

export const Temp = styled.div`
  /* position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  //left: 50%;
  background-color: aliceblue;
  z-index: 99999; */
`;
