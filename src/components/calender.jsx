import React from "react";
import Day from "./day";
import styled from "styled-components";

const CalendarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height:100%;
  border-radius: 5px;
  justify-content:center;
  column-gap:0.5rem;
`;

const Calendar = ({ days, birthdays }) => {
  return (
    <CalendarContainer>
      {days.map((day,index) => (
        <Day key={day} day={day} birthdays={birthdays[index]} />
      ))}
    </CalendarContainer>
  );
};

export default React.memo(Calendar);
