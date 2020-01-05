import React from "react";
import { inject } from "snowball/app";
import { ImageUpload, NCFormItem } from "nuclear";

const SFSImageUpload = inject(({ app }, props) => {
    return {
        action: app.env.IMAGE_UPLOAD_URL,
        processSrc: (src) => `${app.env.SFS_URL}${src}`,
        processResp: (resp) => resp.fileName,
    };
})(ImageUpload);

export default SFSImageUpload;

SFSImageUpload.createHelp = ImageUpload.createHelp;

export const SFSImageUploadFormItem = (props) => {
    const help = ImageUpload.createHelp(props);

    return (
        <NCFormItem
            help={help}
            {...props}
        >
            <SFSImageUpload />
        </NCFormItem>
    );
};