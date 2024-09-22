import React, {useState} from "react";

function ColorPicker () {
    const [color, setColor] = useState("#FFFFFF")
    const handleColorChange = (evt) => {
        setColor(evt.target.value);
    }
    
    return (
        <div className="flex flex-col items-center">
            <h1 className="m-8 text-5xl">Color Picker</h1>
            <div className="w-40 h-40 border-4 border-solid border-black rounded-xl flex justify-center items-center mb-6 color-display" style={{backgroundColor: color}}>
                <p className="text-gray-900 text-xl text-center">Selected Color: {color}</p>
            </div>
            <label className="text-lg font-bold mb-3">Select a Color</label>
            <input className="w-20 h-12 p-0 rounded-md border-2 border-solid border-black" type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker;