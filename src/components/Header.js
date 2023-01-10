import React from 'react';

export default function Header({ title }) {
  return (
    <header>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
}
