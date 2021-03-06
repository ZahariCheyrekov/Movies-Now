import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

const Spinner = () => {
    const [styles, setStyles] = useState({});

    useEffect(() => {
        setStyles({
            margin: "0 auto",
            display: "flex",
            width: "100px",
            height: "70vh",
            fill: "#ffffff"
        });
    }, []);

    return (
        < ReactLoading
            type="spin"
            style={styles}
        />
    );
}

export default Spinner;