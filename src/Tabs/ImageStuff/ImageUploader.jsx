import React from "react"
import {uploading} from "./api"



const ImageUploader = () => {

    const [image, setImage] = React.useState(null)
    const [imageDisplay, setImageDisplay] = React.useState(null)

    const imageInput = (event) => {
        setImage(event.target.value)
        //console.log(image.path)
        const [file] = event.target.files
        
        setImageDisplay(URL.createObjectURL(file))
    }

    let fileData = image ? <img src={imageDisplay} width="500" height="333"></img> : <div>Please Select an Image</div>
    console.log("image: ", image)

    return (
        <div>
            <div>{fileData}</div>
            <div>
                <input type="file" onChange={imageInput} />
                <button onClick={() => uploading(image)}>Upload Image</button>
                {/* <button onClick={() => console.log(image)}>Upload Image</button> */}
            </div>
        </div>

    )
}
export default ImageUploader