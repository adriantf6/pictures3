import ImageShow from "./ImageShow"
function ImageList( {images} ){
    console.log(images)
    const renderImage = images.map((image)=>{
        return <ImageShow key ={image.id} image = {image}/>
    })
    return(
        <div>
            <h1>{renderImage} </h1>
        </div>
    )
}
export default ImageList