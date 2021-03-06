import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";

import { HabitContainer } from "./styles";
import grayButton from "../../assets/grayButton.png";
import greenButton from "../../assets/greenButton.png";

function Habit({id, name, done, currentSequence, highestSequence, setReloadHabits}) {
  const { userData } = useContext(UserContext);
  const [checked, setChecked] = useState(done);

  function checsksRequest() {
    const action = checked ? "uncheck" : "check";
    const checkedValue = checked ? false : true;

    const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${action}`, {},{
      headers: {
        Authorization: `Bearer ${userData.token}`
      }
    });
    
    promisse.then((response) => {
      setReloadHabits([]);
      setChecked(checkedValue);
      console.log(response)
    })
    promisse.catch((error) => console.log(error.response))
  }

  return (
    <HabitContainer current_equal_highest={currentSequence === highestSequence} checked={checked}>
      <h1>{name}</h1>
      <p>Sequência atual: <span>{currentSequence} dias</span><br/>Seu recorde: <span>{highestSequence} dias</span></p>
      <img src={checked ? greenButton : grayButton} alt="check-button" onClick={checsksRequest}/>
    </HabitContainer>
  )
}

export default Habit;