import React from "react";
import { inject } from "snowball/app";
import { ImageUpload, NCFormItem } from "nuclear";

const SFSImageUpload = inject(({ ctx }) => ({
    action: ctx.app.env.IMAGE_UPLOAD_URL,
    processSrc: (src) => `${ctx.app.env.SFS_URL}${src}`,
    processResp: (resp) => resp.fileName,
}))(ImageUpload)

export default SFSImageUpload;

export const SFSImageUploadFormItem = (props) => {
    const {
        maxSize = 300,
        fileTypes = [
            'image/jpg',
            'image/jpeg',
            'image/png'
        ],
        restrict
    } = props;

    let help = '上传格式为' + fileTypes.map(type => type.replace(/^image\//, '')).join('、') + `，大小${maxSize}KB以下`;

    if (restrict) {
        const {
            minWidth,
            maxWidth,
            minHeight,
            maxHeight,
            width,
            height,
            isSquare
        } = restrict;

        let restrictMsg = '';

        if (isSquare) {
            restrictMsg += "正方形";
        }
        if (width) {
            restrictMsg += "宽度" + width;
        } else {
            if (minWidth || maxWidth) {
                restrictMsg += "宽度" + minWidth + '-' + maxWidth;
            }
        }
        if (height) {
            restrictMsg += "高度" + height;
        } else {
            if (minHeight || maxHeight) {
                restrictMsg += "高度" + minHeight + '-' + maxHeight;
            }
        }

        if (restrictMsg) {
            help += '、' + restrictMsg;
        }
    }

    help += `的图片`;

    return (
        <NCFormItem
            help={help}
            {...props}
        >
            <SFSImageUpload />
        </NCFormItem>
    );
};