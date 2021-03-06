import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'your_upload_preset_id';
const UPLOAD_URL = '/upload_image';

export default class FileUploader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            uploadedFileUrl: '',
            uploadedFileThumbUrl: '',
            uploadedFile: {name: ""}
        };
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileThumbUrl: response.body.thumb_url,
                    uploadedFileUrl: response.body.url
                });
            }
        });
    }

    clearPic(){
        this.setState({
            uploadedFileThumbUrl: '',
            uploadedFileUrl: ''
        });
    }

    render() {
        return (
        <div className="row">
            <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <p>Click to select or drop an image here to upload.</p>
            </Dropzone>
            <div>
                {this.state.uploadedFileThumbUrl === '' ? null :
                    <div>
                        <p>{this.state.uploadedFile.name}</p>
                        <img src={this.state.uploadedFileThumbUrl} />
                    </div>}
            </div>
        </div>
        )
    }
}
