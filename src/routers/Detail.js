
import TitleBar from "../component/TitleBar";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Body = styled.div`
    text-align : center;
`;
export default function Detail() {
    const { id } = useParams();
    return(
    <div>
        <TitleBar></TitleBar>
        <Body>
            <h1>id = {id}</h1>
            <h1>
            Thank you!
            </h1>
        </Body>
    </div>
    );
  }