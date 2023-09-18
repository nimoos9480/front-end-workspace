import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";

const Home = ({ list, deleteBeverage }) => {
  console.log(list);
  // 삭제버튼 클릭시 발생할 이벤트
  const onClick = (event) => {
    console.log(event.target.id);
    deleteBeverage(event.target.id);
  };
  return (
    <table border="1" style={{ borderCollapse: "collapse" /* 한줄 처리 */ }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>음료명</th>
          <th>설명</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          // 가장 상위 값에 키 값 넣어주면 됨(tr)
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.desc}</td>
            <td>
              <button onClick={onClick} id={item.id}>
                삭제
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const Create = ({ addBeverage }) => {
  const navigate = useNavigate(); // 다른페이지로 이동하는 것 설정
  const onSubmit = (event) => {
    event.preventDefault(); // 막아버리기 그 후 추가와 관련된것 던진다
    const title = event.target.title.value;
    const desc = event.target.desc.value;
    // console.log(title);
    addBeverage(title, desc); // 함수로 값 보내기
    navigate("/"); // 이동하고 싶은 경로 설정
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">
          음료명 :
          <input
            type="text"
            id="title"
            name="title"
            placeholder="음료명 입력"
          ></input>
        </label>
      </div>

      <div>
        <label htmlFor="desc">
          설명 :
          <input
            type="text"
            id="desc"
            name="desc"
            placeholder="설명 입력"
          ></input>
        </label>
      </div>

      <input type="submit" value="추가"></input>
    </form>
  );
};

const App = () => {
  const [id, setId] = useState(3); // 추가하기 쉽게 3부터 시작
  const [beverages, setBeverages] = useState([
    {
      id: 1,
      title: "여수 윤슬 헤이즐넛 콜드브루",
      desc: "윤슬을 형상화한 헤이즐넛 콜드브루",
    },
    {
      id: 2,
      title: "아이스 오렌지 판타지 유스베리 티",
      desc: "상큼한 오렌지와 유스베리, 얼그레이 티의 조화",
    },
  ]);

  const addBeverage = (title, desc) => {
    console.log(title);
    console.log(desc);

    const newBeverage = { id, title, desc };
    // id:id, title:title, desc:desc 반복일때 한번만 써줘도 됨
    console.log(newBeverage);
    setBeverages([...beverages, newBeverage]);
    // ...beverages: 기존 배열 복제
    setId(id + 1);
  };

  const deleteBeverage = (id) => {
    // 기존의 리스트(beverages)에 filter(조건) 처리
    // 조건 => item.id(숫자)가 선택된 id(문자)가 아닌 것들만 남기겠다
    const newList = beverages.filter((item) => item.id !== parseInt(id));
    setBeverages(newList);
  };

  return (
    <BrowserRouter>
      <h1>Cafe</h1>
      <ul>
        <li>
          <Link to="/">목록</Link>
          {/* <NavLink to="/">Home</NavLink> */}
        </li>
        <li>
          <Link to="/create">추가</Link>
        </li>
      </ul>

      <Routes>
        <Route
          path="/"
          element={<Home list={beverages} deleteBeverage={deleteBeverage} />}
        />
        <Route path="/create" element={<Create addBeverage={addBeverage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
