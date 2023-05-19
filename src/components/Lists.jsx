import React, { useRef, useState } from 'react'

const Lists = () => {
    //const developers = ['Ahmed','Maria']
    const [developers, setDevelopers] = useState([])
    const [developer, setDeveloper] = useState('')
    const developerRef = useRef()
    const addDeveloper = (e) => {
        e.preventDefault()
        const newDeveloper = [developer]
        setDevelopers([...developers,newDeveloper])
        setDeveloper('')
        developerRef.current.focus()
    }
    return(
        <div>
            <form onSubmit={addDeveloper}>
                <input type='text' placeholder='Enter a developer' required value={developer} ref={developerRef}
                style={{
                    margin:10,
                    padding:5,
                    fontFamily:'cursive',
                    fontSize:20,
                    borderRadius:10
                }}
                onChange={(e) =>
                setDeveloper(e.target.value)}/>
                <input type='submit' 
                value='Add'
                 style={{
                    padding:5,
                    fontFamily:'cursive',
                    fontSize:20,
                    borderRadius:10
                }}
                />
             </form>
            {developers.map((developer,index) => (
                <li key ={index} style={{
                    fontSize:20,
                    marginLeft:10
                }}>{developer}</li>
            ))}
           
        </div>
    )
}
export default Lists