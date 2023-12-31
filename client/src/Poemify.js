import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button"

export default function Poemify( poemData ) {

    const [test, setTest] = useState(false);
    const [poem, setPoem] = useState("");

    let songs = poemData.poemData;


    console.log(songs);
    
    /*
    axios({
        method: 'POST',
        url: "http://localhost:3001/generate",
        params: {
            poemData: songs,
        }
    }).then((response) =>{
        setPoem(response.data.poem);
    }).catch(error => {
        console.log(error);
    });*/
    function generate(){
        axios({
            method: 'POST',
            url: "http://localhost:3001/generate",
            params: {
                poemData: songs,
            }
        }).then((response) =>{
            setPoem(response.data.poem);
            //return response.data.poem;
        }).catch(error => {
            console.log(error);
        });
    }
    
    

    return (
        <div>
            <><Button variant ="primary" onClick={() =>
                setPoem(generate())
            }>Generate</Button></>
            
            <p>{poem}</p>
        </div>
    )
}

