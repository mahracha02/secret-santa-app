import React from "react";

function SecretSantaPairs({ pairs }) {
  if (pairs.length === 0) return null;

  return (
    <div className="mt-4">
      <h3 className="text-center text-white">Secret Santa Pairs</h3>
      <ul className="list-group">
        {pairs.map((pair, index) => (
          <li className="list-group-item" key={index}>
            {pair.giver} &rarr; {pair.receiver}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SecretSantaPairs;
