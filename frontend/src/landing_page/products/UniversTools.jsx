import React from 'react';

function UniversTools({
    imageUrl,
    Link,
    ToolDescription,
}) {
    return ( 
        <div className="container text-center">
            <div className="row p-5">
                <a href={Link}><img src={imageUrl} style={{height:"45px", alignSelf:"center"}}/></a>
                <p className='text-muted mt-2 p-2 ms-md-0 ms-0'style={{fontSize: "0.95rem"}}>{ToolDescription}</p>
            </div>
        </div>
     );
}

export default UniversTools;