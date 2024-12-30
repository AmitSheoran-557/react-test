import React from 'react';
import { useSearchParams } from 'react-router-dom';

const ParamsCards = () => {
    const [params, setParams] = useSearchParams();

    const clickHandler = (name) => {
        setParams({ name: name.toLowerCase().replace(/\s+/g, '-') });
    };

    const newName = params.get("name");

    const MAP_LIST = () => [
        {
            tittle: 'Card One',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, autem!",
            btnPara: 'Click Me',
        },
        {
            tittle: 'Card Two',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, autem!",
            btnPara: 'Click Me',
        },
        {
            tittle: 'Card Three',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, autem!",
            btnPara: 'Click Me',
        },

    ];

    return (
        <div className="d-flex flex-column bg-secondary min-vh-100 justify-content-center align-items-center">
            <div className='d-flex justify-content-center align-items-center gap-4'>
                {MAP_LIST().map((obj, i) => (
                    <div key={i} className="bg-light d-flex border border-dark p-4 w-100" style={{ maxWidth: '300px', cursor: 'pointer' }}
                        onClick={() => clickHandler(obj.tittle)} >
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="text-center p-2 bg-dark text-white rounded">
                               <h2 className='fs-3'>{obj.tittle}</h2> 
                                <p>{obj.description}</p>
                                <button>{obj.btnPara}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className="mt-4 mx-auto text-center text-white fs-3">You clicked on {newName}</p>
        </div>
    );
};

export default ParamsCards;
