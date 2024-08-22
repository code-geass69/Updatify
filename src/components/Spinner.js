import React from 'react'
import loading from './loading.gif'

const Spinner = ()=> {
        return (
            <div className="text-center" >
                <img style={{width: '100px', height: '100px'}} className="my-3" src={loading} alt="loading" />
            </div>
        )
}

export default Spinner