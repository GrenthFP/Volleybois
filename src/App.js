import React, { useState, useEffect } from "react";

import "./App.css";

let counter = 0;
let mobilka = 0;
let mobilka2 = 0;
function App() {
  const name1 = [
    "Viktor",
    "Petar",
    "Georgi",
    "Stefan",
    "Hristo",
    "Nikolay",
    "Gonzo",
    "Vasil",
    "Boris",
    "Dimitar",
    "Ivan",
    "Nasiu"
  ];
  const name2 = [
    "Stefanov",
    "Georgiev",
    "Kutev",
    "Avramov",
    "Kolarov",
    "Angelov",
    "Daskalov",
    "Blagoev",
    "Kovachev",
    "Popov",
    "Dzhivdzhanov"
  ];
  const [player_name1, set_player_name1] = useState([]);
  const [player_nameenemy, set_player_nameenemy] = useState([]);
  const [power_ally, set_power_ally] = useState("");
  const [power_enemy, set_power_enemy] = useState("");
  const pos = [
    "Wing Spiker",
    "Setter",
    "Middle Blocker",
    "Libero",
    "Blocker",
    "Middle Spiker"
  ];
  const [player_choices, set_player_choices] = useState([]);

  const Player_gen = () => {
    if (player_choices.length < 3 && player_name1.length < 6) {
      let full_player_add = [];
      for (let i = 0; i < 3; i++) {
        let chance = Math.floor(Math.random() * 12);
        console.log(chance);
        let chance2 = Math.floor(Math.random() * 11);
        let chance3 = Math.floor(Math.random() * 100);
        let chance4 = Math.floor(Math.random() * 6);
        let sum = chance3 / 40.76;
        let sum2 = Math.pow(4, sum);
        let overall_real = Math.floor(70 + sum2);
        const full_player = {
          name: name1[chance],
          name2: name2[chance2],
          position: pos[chance4],
          overall: overall_real
        };
        full_player_add.push(full_player);
      }

      set_player_choices(full_player_add);
    }
  };

  const Player_genenemy = () => {
    if (player_name1.length == 6) {
      let full_player_array = [];
      for (let i = 0; i < 6; i++) {
        if (player_nameenemy.length < 6) {
          let chance = Math.floor(Math.random() * 9);
          let chance2 = Math.floor(Math.random() * 9);
          let chance3 = Math.floor(Math.random() * 100);
          let overall_real = Math.floor(70 + Math.pow(4, chance3 / 40.76));
          const full_player2 = {
            name: name1[chance],
            name2: name2[chance2],
            position: pos[i],
            overall: overall_real
          };

          full_player_array.push(full_player2);
          mobilka2 = mobilka2 + full_player2.overall;
        }
      }
      let overalled = 0;
      overalled = mobilka2 / 6;
      overalled = Math.floor(overalled);
      set_power_enemy(overalled);
      set_player_nameenemy(full_player_array);
    }
  };

  useEffect(() => {
    if (player_name1.length == 6) {
      for (let k = 0; k < 6; k++) {
        mobilka = mobilka + player_name1[k].overall;
      }
      let overalled = 0;
      overalled = mobilka / 6;
      overalled = Math.floor(overalled);
      set_power_ally(overalled);
      console.log(player_name1);
    }
  }, [player_name1]);
  const Draft_player = i => {
    set_player_name1([...player_name1, player_choices[i]]);
    set_player_choices([]);
  };

  return (
    <div className="App">
      <button onClick={Player_gen}>Draw</button>
      <button onClick={Player_genenemy}>Battle</button>
      <table>
        <h3>Your team: {power_ally}</h3>
        <tr className="general_frame">
          <tr>
            <th>Firstname:</th>
          </tr>
          <tr>
            <th>Lastname:</th>
          </tr>
          <tr>
            <th>Position:</th>
          </tr>
          <tr>
            <th>Overall:</th>
          </tr>
        </tr>
        {player_name1.map(player_name1 => (
          <tr className="player_unit_frame">
            <tr>
              <tr>
                <td>{player_name1.name}</td>
              </tr>
              <tr>
                <td>{player_name1.name2}</td>
              </tr>
              <tr>
                <td>{player_name1.position}</td>
              </tr>
              <tr>
                <td>{player_name1.overall}</td>
              </tr>
            </tr>
          </tr>
        ))}
      </table>
      <table>
        <h3>enemy team: {power_enemy}</h3>
        <tr className="general_frame">
          <tr>
            <th>Firstname:</th>
          </tr>
          <tr>
            <th>Lastname:</th>
          </tr>
          <tr>
            <th>Position:</th>
          </tr>
          <tr>
            <th>Overall:</th>
          </tr>
        </tr>

        {player_nameenemy.map(player_nameenemy => (
          <tr className="player_unit_frame">
            <tr>
              <tr>
                <td>{player_nameenemy.name}</td>
              </tr>
              <tr>
                <td>{player_nameenemy.name2}</td>
              </tr>
              <tr>
                <td>{player_nameenemy.position}</td>
              </tr>
              <tr>
                <td>{player_nameenemy.overall}</td>
              </tr>
            </tr>
          </tr>
        ))}
      </table>
      <table>
        <h3>Drafts:</h3>
        <tr className="general_frame">
          <tr>
            <th>Firstname:</th>
          </tr>
          <tr>
            <th>Lastname:</th>
          </tr>
          <tr>
            <th>Position:</th>
          </tr>
          <tr>
            <th>Overall:</th>
          </tr>
        </tr>

        {player_choices.map((player_choices, i) => (
          <tr className="player_unit_frame">
            <tr>
              <tr>
                <td>{player_choices.name}</td>
              </tr>
              <tr>
                <td>{player_choices.name2}</td>
              </tr>
              <tr>
                <td>{player_choices.position}</td>
              </tr>
              <tr>
                <td>{player_choices.overall}</td>
              </tr>
              <button key={i} onClick={() => Draft_player(i)}>
                Draft
              </button>
            </tr>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
