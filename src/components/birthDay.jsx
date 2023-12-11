import React from "react";
import styled from "styled-components";


const BirthdayContainer = styled.div`
  color: #fff;
  box-sizing:border-box;
`;

const Birthday = ({ initials, day,bg }) => (
  
    <BirthdayContainer>
      <div style={{backgroundColor:bg, height:'100%', display:'flex', justifyContent:'space-around', alignItems:'center'}}>
      {initials}
      </div>
    </BirthdayContainer>
);

export default Birthday;
