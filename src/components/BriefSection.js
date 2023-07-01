import axios from "axios";
import { useEffect, useState } from "react"

const BriefSection = () => {

  const [data, setData] = useState([
    
  ]);

  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <div>
      <div className="text-3xl">
        <form>
          <input type="text" className="w-12 h-7 text-xlindent-0.5 float-left" />
          <span className="text-xl float-left">년</span>
          <select name="" id="" className="w-14 h-7 text-xl indent-0.5 float-left">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
          <span className="text-xl float-left">월</span>
          <input type="text" className="w-12 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">원으로</span><br />
          <p className="text-xl float-left">가장 많이 절약했습니다.</p><br/>
        </form>
        
        <form action="#">
            <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">년</span>
          <select name="" id="" className="w-14 h-7 text-xl indent-0.5 float-left">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
          <span className="text-xl float-left">월</span>
          <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">시간으로</span><br />
          <p className="text-xl float-left ">가장 많이 절약했습니다.</p>
        </form>

        <form action="#" className="mt-8 "><br/>
            <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">년</span>
          <select name="" id="" className="w-14 h-7 text-xl indent-0.5 float-left">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
          <span className="text-xl float-left">월부터 ~ &nbsp;</span>
          
          <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">년</span>
          <select name="" id="" className="w-14 h-7 text-xl indent-0.5 float-left">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
          <span className="text-xl float-left">월까지</span><br/>
          <p className="text-xl float-left">총 절약한 비용</p><br/> <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
        </form>

        <form action="#"><br/>
            <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">년</span>
          <select name="" id="" className="w-14 h-7 text-xl indent-0.5 float-left">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
          <span className="text-xl float-left">월부터 ~ &nbsp;</span>
          
          <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
          <span className="text-xl float-left">년</span>
          <select name="" id="" className="w-14 h-7 text-xl indent-0.5 float-left">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
          <span className="text-xl float-left">월까지</span><br/>
          <p className="text-xl float-left">총 절약한 금액</p><br />
          <input type="text" className="w-12 h-7 text-xl indent-0.5 float-left" />
        </form>
      </div>
      </div>
  )
}
export default BriefSection