import React from 'react'
import styled from "styled-components";

const Layout = styled.div`
	display: grid;
    background-color: pink;
    text-align : center;
`;

function TitleBar (){
  return(
      <Layout>
        <h1>☆★☆★☆★☆★아 재밌는 코딩☆★☆★☆★☆★</h1>
      </Layout>
  )
}

export default TitleBar
