import React, { useState, useMemo, useEffect } from 'react';
import chroma from "chroma-js";

const App = () => {
    const [range, setRange] = useState([0, 1]);
    const [test, setTest] = useState(0);
    const [colors, setColors] = useState(['orange', 'red', 'green', 'darkblue']);
    return <div style={{ margin: 50 }}>
        Range:
        <input type={'range'} min={0} max={range[1]} step={0.01} value={range[0]} onChange={event => setRange(range => [event.target.value, range[1]])} />{range[0]}
        <input type={'range'} min={range[0]} max={1} step={0.01} value={range[1]} onChange={event => setRange(range => [range[0], event.target.value])} />{range[1]}
        <div style={{ color: chroma({ h: 0, s: 0, v: range[1] }).hex(), backgroundColor: chroma({ h: 0, s: 0, v: range[0] }).hex() }}>
            <label>Sample text</label>
            {colors.map(color => {
                const [hue, saturation, value] = chroma(color).hsv();
                return <div style={{ width: 200, backgroundColor: color, color: value < 0.4 ? '#fff' : '#333' }}>
                    [{hue}, {saturation}, {value}]
                </div>
            })}
        </div>
        <div style={{ color: chroma({ h: 0, s: 0, v: range[0] }).hex(), backgroundColor: chroma({ h: 0, s: 0, v: range[1] }).hex() }}>
            <label>Sample text</label>
            {colors.map(color => {
                const [hue, saturation, value] = chroma(color).hsv();
                // debugger;
                const converted = range[1] + range[0] - value;
                return <div style={{ width: 200, backgroundColor: chroma({ h: hue, s: saturation, v: converted }).hex(), color: converted < 0.4 ? '#fff' : '#333' }}>
                    [{hue}, {saturation}, {converted}]
                </div>
            })}
        </div>
        <input type={'range'} min={0} max={1} step={0.01} value={test} onChange={event => setTest(event.target.value)} />{test}
        <div style={{ backgroundColor: chroma({ h: 0, s: 1, v: test }).hex() }}>{chroma({ h: 0, s: 1, v: test }).hex()}</div>
    </div>
};

export default App;