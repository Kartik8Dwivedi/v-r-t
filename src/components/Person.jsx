import React from 'react'

const Person = ({ name,age }) => {
  return (
    <React.Fragment>
      <div className="flex justify-center h-20 items-center text-3xl text-white pt-20">
        Hello, I am <span className="px-3 text-yellow-500">{name}</span> and I
        am <span className="px-3 text-yellow-500">{age}</span> years old{" "}
      </div>
    </React.Fragment>
  );
}

export default Person