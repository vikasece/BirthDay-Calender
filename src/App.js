import React, { useState } from "react";
import Calendar from "./components/calender";
import './App.css'

const data = [
  {
    name: "Tyrion Lannister",
    birthday: "12/02/1978"
  }, {
    name: "Cersei Lannister",
    birthday: "11/30/1975"
  }, {
    name: "Daenerys Targaryen",
    birthday: "11/24/1991"
  }, {
    name: "Arya Stark",
    birthday: "11/25/1996"
  }, {
    name: "Jon Snow",
    birthday: "12/03/1989"
  }, {
    name: "Sansa Stark",
    birthday: "15/08/1992"
  }, {
    name: "Jorah Mormont",
    birthday: "12/16/1968"
  }, {
    name: "Jaime Lannister",
    birthday: "12/06/1975"
  }, {
    name: "Sandor Clegane",
    birthday: "11/07/1969"
  }, {
    name: "Tywin Lannister",
    birthday: "10/12/1951"
  },
  {
    name: "Theon Greyjoy",
    birthday: "12/31/1989"
  },
  {
    name: "Tywin Lannister",
    birthday: "10/12/1951"
  },
  {
    name: "Tywin Lannister",
    birthday: "10/12/1951"
  },
  {
    name: "Tywin Lannister",
    birthday: "10/12/1951"
  },
  {
    name: "Samwell Tarly",
    birthday: "12/07/1990"
  }, {
    name: "Joffrey Baratheon",
    birthday: "06/12/1992"
  }, {
    name: "Catelyn Stark",
    birthday: "12/03/1962"
  },
  {
    name: "Bran Stark",
    birthday: "12/02/1995"
  },
  {
    name: "Bran Stark",
    birthday: "12/02/1995"
  },
  {
    name: "Bran Stark",
    birthday: "12/02/1995"
  },
  {
    name: "Petyr Baelish",
    birthday: "11/20/1974"
  }, {
    name: "Robb Stark",
    birthday: "11/28/1986"
  }, {
    name: "Brienne of Tarth",
    birthday: "11/27/1985"
  }, {
    name: "Margaery Tyrell",
    birthday: "12/02/1989"
  }, {
    name: "Stannis Baratheon",
    birthday: "09/14/1971"
  }, {
    name: "Davos Seaworth",
    birthday: "02/13/1973"
  }, {
    name: "Tormund Giantsbane",
    birthday: "12/14/1974"
  }, {
    name: "Jeor Mormont",
    birthday: "11/01/1955"
  }, {
    name: "Eddard Stark",
    birthday: "12/02/1963"
  }, {
    name: "Khal Drogo",
    birthday: "12/05/1980"
  }, {
    name: "Ramsay Bolton",
    birthday: "12/05/1976"
  }, {
    name: "Robert Baratheon",
    birthday: "12/02/1965"
  }, {
    name: "Daario Naharis",
    birthday: "12/02/1985"
  }
  , {
    name: "Viserys Targaryen",
    birthday: "12/06/1984"
  }
  , {
    name: "Viserys Targaryen",
    birthday: "12/06/1984"
  }
  , {
    name: "Viserys Targaryen",
    birthday: "12/06/1984"
  }
  , {
    name: "Viserys Targaryen",
    birthday: "12/06/1984"
  }
  , {
    name: "Viserys Targaryen",
    birthday: "12/06/1984"
  }
  , {
    name: "Viserys Targaryen",
    birthday: "12/06/1984"
  }
  , {
    name: "Viserys Targaryen",
    birthday: "12/06/1984"
  }
  , {
    name: "Viserys Targaryen",
    birthday: "19/06/1984"
  }
  , {
    name: "Viserys Targaryen",
    birthday: "10/06/1984"
  }
]

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


function App() {
  const [date, setDate] = useState();
  const [isDisable, setIsDisable] = useState(true);
  const [birthdays, setBirthdays] = useState([]);

  const hadleBirthDay = (date) => {
    let res = data.filter(person => person.birthday.includes(date))
    const birthdaysObject = {};

    for (const person of res) {
      const birthdayDate = new Date(person.birthday);
      const day = birthdayDate.getDay();
      if (!birthdaysObject[day]) {
        birthdaysObject[day] = [];
      }
      birthdaysObject[day].push({
        initials: person.name.split(" ").map((name) => name[0]).join(""),
      });
      setBirthdays(birthdaysObject)
    }
  }

  const handleInput = (e) => {
    const { value } = e.target;
    if (value.length > 3) {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
    setDate(value)
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Birthday Calendar</h1>
      <Calendar days={days} birthdays={birthdays} />
      <br />
      <div className="app__txt js-json">
        <textarea id="json-input" placeholder="[{ name: Tyrion Lannister, birthday: 12/02/1978}, {
      name: Cersei Lannister,
      birthday: 11/30/1975
    }, {
      name: Daenerys Targaryen,
      birthday: 11/24/1991
    }, {
      name: Arya Stark,
      birthday: 11/25/1996
    }, {
      name: Jon Snow,
      birthday: 12/03/1989
    }, {
      name: Sansa Stark,
      birthday: 15/08/1992
    }, {
      name: Jorah Mormont,
      birthday: 12/16/1968
    }, {
      name: Jaime Lannister,
      birthday: 12/06/1975
    }, {
      name: Sandor Clegane,
      birthday: 11/07/1969
    }, {
      name: Tywin Lannister,
      birthday: 10/12/1951
    }, {
      name: Theon Greyjoy,
      birthday: 12/31/1989
    }, {
      name: Samwell Tarly,
      birthday: 12/07/1990
    }, {
      name: Joffrey Baratheon,
      birthday: 06/12/1992
    }, {
      name: Catelyn Stark,
      birthday: 12/03/1962
    }, {
      name: Bran Stark,
      birthday: 12/02/1995
    }, {
      name: Petyr Baelish,
      birthday: 11/20/1974
    }, {
      name: Robb Stark,
      birthday: 11/28/1986
    }, {
      name: Brienne of Tarth,
      birthday: 11/27/1985
    }, {
      name: Margaery Tyrell,
      birthday: 12/02/1989
    }, {
      name: Stannis Baratheon,
      birthday: 09/14/1971
    }, {
      name: Davos Seaworth,
      birthday: 02/13/1973
    }, {
      name: Tormund Giantsbane,
      birthday: 12/14/1974
    }, {
      name: Jeor Mormont,
      birthday: 11/01/1955
    }, {
      name: Eddard Stark,
      birthday: 12/02/1963
    }, {
      name: Khal Drogo,
      birthday: 12/05/1980
    }, {
      name: Ramsay Bolton,
      birthday: 12/05/1976
    }, {
      name: Robert Baratheon,
      birthday: 12/02/1965
    }, {
      name: Daario Naharis,
      birthday: 12/02/1985
    }, {
      name: Viserys Targaryen,
      birthday: 12/06/1984
    }]">
        </textarea>
        <div className="input-box">
          <label>Year</label>
          <input type="text" value={date} onChange={(e) => handleInput(e)} />
          <button onClick={() => hadleBirthDay(date)} disabled={isDisable} style={{ opacity: isDisable ? 0.7 : 1 }}>Update</button>
        </div>
      </div>

    </div>
  );
}

export default App;
