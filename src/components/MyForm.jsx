import { useState } from 'react';

export const MyForm = () => {
    const [mood, setMood] = useState('');
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleClick = () => {
        setMood(value);
        setValue('');
    }

    return (
        <>
            <form>
                <label> What is your mood?
                    <input type="text" value={value} onChange={(e) => { handleChange(e) }} />
                </label>
                <button type="button" onClick={handleClick}>Save Mood</button>
            </form>
            <p>My Mood is: {mood}</p>
        </>
    );
}