import React from 'react';

import './Task-1/UserCard.css'; 
import UserCard from './Task-1/UserCard';  
import Counter from './Task-2/Counter';
import './Task-2/Counter.css';

function Week1App() {
  return (
    <div className="App">
      <h1>Task1 </h1>

  
      <div className="user-cards-container">
        <UserCard 
          name="Munira Abdulkerim" 
          email="muniraabdulkerim08@gmail.com" 
          age={20} 
          backgroundColor="lightpink" 
        />
        <UserCard 
          name="Misgana Betselot" 
          email="misgana@gmail.com" 
          age={20} 
          backgroundColor="lightgreen" 
        />
        <UserCard 
          name="MihretTesfaye" 
          email="mercy@gmail.com" 
          age={20} 
          backgroundColor="lightblue" 
        />
      </div>
      <h1>Task 2</h1>
      <div className="counter-container">
        
        <Counter />
      </div>
    </div>
  );
}

export default Week1App;
