import React, {memo} from 'react'

function Video() {
    console.log("re-render")
    return (
        <div>
           <h1>hello</h1> 
        </div>
    )
}

export default memo(Video)
