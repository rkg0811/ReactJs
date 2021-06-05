import React, { useEffect, useState } from 'react'
import './dummy.css';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60b6023c98e5768341aefad0';

function Dummy(){
    const [data, setData] = useState([]);

    const getDummyData = async () => {

        try {
            const res = await fetch(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } });

            const actual_data = await res.json();
            console.log(actual_data.data);
            setData(actual_data.data);


        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getDummyData();
    }, []);



    return (
        <>
            <section>
                <h1> Dummy API</h1>
                <div className="App">
                     <input type="text"
                        placeholder="Search...."
                        onChange={(event) => {
                            setData(event.target.value);
                        }}
                    /> 
                    {/* {data.filter((val) => {
                        if (data === "") {
                            return val
                        }
                        else if (val.firstName.toLowerCase().includes(data.toLowerCase())) {
                            return val
                        }
                    }) */}

                   {data.map((val, key) => {
                        return (
                            <ul className="list">
                            <li>
                                <div className="inner">
                                <p className="profilepic"><img src={val.picture} alt="Logo" /></p>
                                <p className="username">{val.firstName} {val.lastName}</p>
                                <p className="useremail">{val.email}</p>
                                </div>
                                </li>
                    </ul>
                                
    
                            
                        );
                    })} 
                   
                </ div>

            </section>

        </>
    )
}
export default Dummy;