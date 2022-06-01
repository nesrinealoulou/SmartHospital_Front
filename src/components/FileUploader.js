import React from "react";

// reactstrap components
import { Form } from "reactstrap";

function FileUploader() {
    return (
        <>
            <Form>
                <div className=" custom-file">
                    <input
                        className=" custom-file-input"
                        id="customFileLang"
                        lang="en"
                        type="file"
                        />
                    <label className="labelUpload custom-file-label" htmlFor="customFileLang"
                           >
                    </label>
                </div>
            </Form>
        </>
    );
}

export default FileUploader;
