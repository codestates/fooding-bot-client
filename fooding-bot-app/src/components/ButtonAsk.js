import React from 'react'

export default function ButtonAsk({ handleUserChoice, choice }) {

    return <button onClick={() => handleUserChoice(choice)}>{choice}</button>;
}