import axios from "axios";
// 통계 데이터 불러오기
export const getStatistics = async () => {
    try {
        const res = await axios.get("/data")
        const data = res.data;
        console.log(data);
    } catch (err) {
        console.log(err)
    }
}