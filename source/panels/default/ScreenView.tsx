import { useState } from "react"

export const ScreenView = () => {
    const [count, setCount] = useState(0);
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 100
        }}>
            <div style={{
                backgroundColor: 'lightblue',
                padding: 10,
                borderRadius: 5,
            }}
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                <span style={{
                    color: 'black'
                }}>
                    {`click me ${count}`}
                </span>
            </div>
        </div>
    )
}
