import React, { useEffect, useState } from 'react';
import Hisab from '../Hisab/Hisab';
import Jinis from '../Jinis/Jinis';
import './Dokan.css';

const Dokan = () => {
    const [jinisPotro, setJinisPotro] = useState([]);
    const [hisab, setHisab] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setJinisPotro(data))
    }, []);

    const handleClicked = product => {
        const newHisab = [...hisab, product];
        setHisab(newHisab);
    };

    return (
        <div className="dokan-container" >
            <div className="jinis-div">
               
                {
                    jinisPotro.map(jinis => <Jinis
                        key={jinis.key}
                        jinis={jinis}
                        handleClicked={handleClicked}

                    />)
                }
            </div>

            <div>
                <Hisab
                    hisab={hisab}

                />
            </div>
        </div>
    );
};

export default Dokan;