import React from 'react'
import { Link } from "react-router-dom";

export default function ButtonAsk({ handleUserChoice, choice }) {

    return (choice === '푸딩주기' ?
        <Link to='/FoodingScore'><button className='choice-btn'>{choice}</button></Link> :
        <button className='choice-btn' onClick={() => handleUserChoice(choice)}>{choice}</button>
    );


    // return <button onClick={() => handleUserChoice(choice)}>{choice}</button>;
}