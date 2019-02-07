import React from "react";
import styled from "styled-components";

const CardContainer = styled.section`
  display:flex;
  width:100%;
`;
const CardImg = styled.img`
  maxHeight: 100%;
  maxWidth:100%;
  height: 400px;
`
const CardItem = styled.article`
  width:100%;
`
const CardPoster = styled.div`
  display: flex;
  width: 100%;
  height:400px;
`

const CardSub = styled.section`
  textAlign:center
`

const Card = props => (
  <CardContainer>
    {props.items.map((item,index) => (
    <CardItem key={index}>
     <CardPoster>
      <CardImg src={item.Poster}/>
     </CardPoster>
     <CardSub>
       <p>{item.Title}</p>
       <p>{item.Relased}</p>
       <p>{item.Genre}</p>
       <p>{item.Runtime}</p>
     </CardSub>
    </CardItem>
      ))}
  </CardContainer>
);

export default Card