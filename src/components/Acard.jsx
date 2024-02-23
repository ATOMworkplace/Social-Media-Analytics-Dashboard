import React from 'react';

function Acard(props){
    const {type,Adata}=props;
    return(
        <div className="Acards">
            <p className="Adata">{Adata}</p>
            <p className="Atext">{type}</p>
        </div>

    );
};

export default Acard;