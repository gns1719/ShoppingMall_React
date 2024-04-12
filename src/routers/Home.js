
import TitleBar from "../component/TitleBar";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Body = styled.div`
    text-align : center;
`;
export default function Detail() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }   
    const onClickBtn = (e) =>{
        navigate(`/${search}`);
    }
    const activeEnter = (e) => {
        if(e.key === "Enter") {
            onClickBtn();
        }
    }
    return(
    <div>
        <TitleBar></TitleBar>
        <Body>
            <input value={search} onChange={onChangeSearch} onKeyDown={(e) => activeEnter(e)}></input>
            <button onClick={onClickBtn}>검색</button>
        </Body>
    </div>
    );
  }