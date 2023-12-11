import React from "react";
import styled from "styled-components";
import Birthday from "./birthDay";

const DayContainer = styled.div`
  width: 13%;
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;

  &.day--empty {
    background-color: #eee;
    grid-gap: 5px;
  }

  > p {
    background-color: #60aded;
    color: white;
    margin: 0;
    padding: 2px 4px;
    text-align: right;
  }
`;

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  return `#${randomColor}`;
};

const Day = ({ day, birthdays }) => {
  const len = birthdays && birthdays.length > 0 ? Math.ceil(birthdays.length / 2) : 1;

  return (
    <>
      <DayContainer className={"day--empty"}>
        <p>{day}</p>
        {birthdays && birthdays.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateRows: `repeat(${len}, auto)`,
              gridTemplateColumns: `repeat(${len}, auto)`,
              height: `calc(100% - 23px)`,
              minHeight: '100px'
            }}
          >
            {Array.from({ length: len * len }).map((_, index) => {
              const colIndex = Math.floor(index / len);
              const rowIndex = index % len;
              const isBirthday = birthdays && birthdays.length > 0 && birthdays.find(
                (person, birthdayIndex) => birthdayIndex === index
              );

              if (isBirthday) {
                return (
                  <Birthday
                    key={`${colIndex}-${rowIndex}`}
                    initials={isBirthday.initials}
                    bg={generateColor()}
                  />
                );
              } else {
                return (
                  <div
                    key={`${colIndex}-${rowIndex}`}
                    style={{ backgroundColor: generateColor(), margin: 0, visibility: 'hidden' }}
                  >
                    -
                  </div>
                );
              }
            })}
          </div>
        ) : (
          <div className="placeholder">
            <small>Place Holder</small>
          </div>
        )

        }

        <small>{birthdays && birthdays.length > 0 ? `${birthdays.length} Birthdays` : ''}</small>
      </DayContainer>
    </>
  );
};

export default Day;
