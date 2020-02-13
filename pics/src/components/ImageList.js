import React from 'react';

const ImageList = props =>{

    const images = props.images.map((image)=>{
        return <img key={image.id} src={image.urls.regular} alt={image.description}/>
    })

    return(
        <div>
            <div>{images}</div>
        </div>
    )
}

export default ImageList

//map e criação de imagens