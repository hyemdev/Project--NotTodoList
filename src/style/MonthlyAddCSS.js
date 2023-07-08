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
  padding: 10px 0;
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
export const AddTable = styled.div`
  width: 100%;
  /* text-align: center; */
  color: #1e293b;
`;

export const AddTableTr = styled.div`
  /* width: 100%; */
  font-size: 14px;
  color: #475569;
  background: #e2e8f0;
  padding: 0 3px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;

export const AddTableThDate = styled.div`
  padding: 12px 3px;
  width: 150px;
  text-align: center;
  letter-spacing: -0.8px;
`;
export const AddTableThTitle = styled.div`
  padding: 12px 3px;
  width: 250px;
  text-align: center;
`;
export const AddTableThNumber = styled.div`
  padding: 12px 3px;
  width: 180px;
  text-align: center;
`;
export const AddTableThBtn = styled.div`
  padding: 12px 3px;
  width: 100px;
`;

/////////////////////////////
// 한달목표 리스트(List body)

export const AddListTr = styled.div`
  width: 100%;
  font-size: 14px;
  color: #475569;
  padding: 0 3px;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  height: 45px;
  border-bottom: 1px dotted #cbd5e1;
`;
export const AddListTdDate = styled.div`
  padding: 12px 3px;
  width: 150px;
  text-align: center;
  letter-spacing: -0.8px;
`;
export const AddListTdTitle = styled.div`
  padding: 12px 3px;
  width: 250px;
  text-align: center;
`;
export const AddListTdNumber = styled.div`
  padding: 12px 7px;
  width: 130px;
  text-align: right;
`;
export const AddListTdUnit = styled.div`
  padding: 12px 7px;
  width: 50px;
  text-align: center;
  margin-right: 20px;
`;
export const AddListBtnDiv = styled.div`
  padding: 5px 3px;
  width: 70px;
  height: 30px;
  margin: 0 auto;
`;
export const AddListbtn = styled.button`
  padding: 3px 3px;
  width: 55px;
  height: 30px;
  margin: 4px;
  /* margin-right: 5px; */
`;

export const AddTableThContent = styled.th`
  padding: 5px 3px;
  text-align: center;
  width: 150px;
`;

//리스트(List body) 수정 중
export const ListTitleEdit = styled.input`
  padding: 12px 3px;
  width: 250px;
  text-align: center;
  border: 1px solid #dddddd;
  border-radius: 5px;
  line-height: 12px;
  height: 38px;
`;

export const ListEditUnit = styled.div`
  width: 50px;
  margin: 0 auto;
  text-align: center;
  padding: 8px 3px;
  
  padding: 12px 7px;
  width: 50px;
  text-align: center;
  margin-right: 20px;
`;
export const ListNumEditDiv = styled.div`
  text-align: right;
  padding-left: 20px;
`;
export const ListNumEdit = styled.input`
  padding: 8px 3px;
  width: 100px;
  text-align: center;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  line-height: 12px;
  height: 35px;
  -webkit-appearance: none; /* Safari 및 Chrome 기반 브라우저 */
  -moz-appearance: none; /* Firefox */
  appearance: none;
`;

// 한달목표 입력 form
export const AddFormWrap = styled.div`
  width: 700px;
  padding: 10px;
  padding-top: 20px;
  margin: 0 auto;

  & > Form {
    display: flex;
    justify-content: space-around;
    margin: 0 10px;
  }
`;

export const AddFormTitle = styled.div`
  width: 200px;
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

export const Temp = styled.div``;
