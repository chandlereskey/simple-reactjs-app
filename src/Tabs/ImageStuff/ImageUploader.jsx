import React from "react"
import {uploading} from "./api"

const ImageUploader = () => {

    const [image, setImage] = React.useState(null)
    const [imageDisplay, setImageDisplay] = React.useState(null)
    const [display, setDisplay] = React.useState(null)


    const imageInput = (event) => {
        const formData = new FormData() 
        formData.append('file', event.target.files[0])
        formData.append('upload_preset', "lmuttvty")
        setImage(formData)
        const [file] = event.target.files
        
        setImageDisplay(URL.createObjectURL(file))
    }

    let information = display ? <div>
        <div>Number of objects found: {display.length}</div>
        <div>{display.map((object) => {
            return <div>This objects top classification was: {object.object}</div>
        })}
        </div>
    </div> : <div>No Image has been uploaded or No Objects Found</div>

    let fileData = image ? <img src={imageDisplay} width="500" height="333" alt="Nothing"></img> : <div>Please Select an Image</div>

    return (
        <div>
            <div>{fileData}</div>
            <div>
                <input type="file" onChange={imageInput} />
                <button onClick={async () => setDisplay(await uploading(image))}>Upload Image</button>
                {information}
            </div>
        </div>

    )
}

export default ImageUploader