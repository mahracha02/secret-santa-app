import React, { useState } from "react";
import ParticipantList from "./ParticipantList";
import SecretSantaPairs from "./SecretSantaPairs";
import "./App.css";



function App() {
  const [participants, setParticipants] = useState([]);
  const [pairs, setPairs] = useState([]);

  const addParticipant = (name) => {
    if (name.trim() && !participants.includes(name)) {
      setParticipants([...participants, name]);
    }
  };

  const removeParticipant = (name) => {
    setParticipants(participants.filter((p) => p !== name));
  };

  const generatePairs = () => {
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    const generatedPairs = shuffled.map((person, index) => ({
      giver: person,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));
    setPairs(generatedPairs);
  };
function Snowflake({ left, duration, children }) {
  const style = {
      position: 'absolute',
      top: '-10px',
      left: `${left}%`,
      fontSize: '2em',
      color: 'white',
      animation: `fall ${duration}s linear infinite, sway ${duration / 2}s ease-in-out infinite`,
      opacity: 0.9,
  };

  return <div style={style}>{children}</div>;
}

function Snowflakes() {
  const snowflakes = Array.from({ length: 20 });

  return (
      <>
          {snowflakes.map((_, index) => {
              const left = Math.random() * 100; // Position horizontale aléatoire
              const duration = 10 + Math.random() * 10; // Durée aléatoire entre 10 et 20 secondes
              return (
                  <Snowflake left={left} duration={duration} key={index}>
                      {index % 2 === 0 ? '❄' : '❅'}
                  </Snowflake>
              );
          })}
      </>
  );
}



  return (
    <div className="app-container">
      <Snowflakes />
      <img className="background" src="/images/background.jpg" alt="Background" />

      <div className="content-container">
        <h1 className="title text-center">
          <span>
            S
            <img src="/images/santa_hat.png" alt="Santa Hat" className="santa-hat" />
            ecret
          </span>
          <span>
            S
            <img src="/images/santa_hat.png" alt="Santa Hat" className="santa-hat" />
            anta v1.0
          </span>
        </h1>

        <ParticipantList participants={participants} addParticipant={addParticipant} removeParticipant={removeParticipant} />
        
        {participants.length > 1 && (
          <div className="text-center my-4">
            <button className="btn btn-primary" onClick={generatePairs}>
              Commencer le Secret Santa
            </button>
          </div>
        )}

        <SecretSantaPairs pairs={pairs} />
      </div>

      <Snowflakes />
    </div>
  );
};



export default App;
