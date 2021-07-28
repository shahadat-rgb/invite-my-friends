import { useState } from "react";
import { IState as Props } from "../../App";

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}


const AddToList: React.FC<IProps> = ({setPeople, people}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        position: "",
        img: ""
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    const handleClick = () => {
        if(!input.name || !input.age) return

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                position: input.position
            }
        ]);

        setInput({
            name: "",
            age: "",
            img: "",
            position: ""
        })
    }

    return (
        <div className="w-full lg:text-center">
            <input 
                type="text"
                onChange={handleChange}
                className="bg-gray-200 p-3 border-none lg:w-3/4 w-full"
                name="name"
                value={input.name}
                placeholder="Enter your Name"
            /> <br /> <br />
            <input 
                type="text"
                onChange={handleChange}
                className="bg-gray-200 p-3 border-none lg:w-3/4 w-full"
                name="age"
                value={input.age}
                placeholder="Enter your Age"
            /> <br /> <br />
            <input 
                type="text"
                onChange={handleChange}
                className="bg-gray-200 p-3 border-none lg:w-3/4 w-full"
                name="img"
                value={input.img}
                placeholder="Enter your  Image Url"
            /> <br /> <br />
            <input
                onChange={handleChange}
                className="bg-gray-200 p-3 border-none lg:w-3/4 w-full"
                name="position"
                value={input.position}
                placeholder="Enter your position"
            /> <br /> <br />
            <button
                onClick={handleClick}
                className="bg-red-400 p-3 border-none text-white lg:w-3/4 w-full"
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList