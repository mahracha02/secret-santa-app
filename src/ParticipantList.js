import React, { useState } from "react";

function ParticipantList({ participants, addParticipant, removeParticipant }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    addParticipant(name);
    setName("");
  };

  return (
    <div>
      <div className="input-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter participant's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Ajouter le participant
        </button>
      </div>
      <ul className="list-group">
        {participants.map((participant, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            {participant}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeParticipant(participant)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParticipantList;
