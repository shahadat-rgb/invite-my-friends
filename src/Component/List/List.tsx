import React from 'react'
import { IState as IProps } from '../../App';

// interface IProps {
//     people: Props["people"]
// }

const List: React.FC<IProps> = ({ people }) => {
   
    return(     
        <div>
            {
                people.map(person=>(

                    <div className="grid lg:grid-cols-4 grid-cols-1 w-full py-2 rounded-lg mb-3 bg-gray-200 items-center px-3">
                        <img className='w-24 h-24 rounded-full mx-auto' src={person.img} alt=""/>
                         <p className="text-red-400 text-lg font-bold text-center">{person.name}</p>
                         <p className="font-bold text-center">{person.age} years old</p>
                         <p className="text-green-400 font-bold text-center">{person.position}</p>
                    </div>
                ))
            }
        </div>
    )
 
}

export default List;
