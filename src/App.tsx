import React, { useState } from 'react';
import List from './Component/List/List';
import AddToList from './Component/AddToLIst/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      position: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Shahadat hossain",
      age: 20,
      img: "https://eastceylon.com/images/2021/07/28/123651516_678916576354479_7620082035163988093_n.jpg",
      position: "Student",
    },
  ])

  return (
    <div className="App">
      <h1 className="text-red-400 text-center lg:text-2xl text-lg font-bold capitalize my-8">People Invited to my Party</h1>
       <div className="grid lg:grid-cols-2 grid-cols-1 mx-3 gap-2">
       <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
       </div>
    </div>
  );
}

export default App;
