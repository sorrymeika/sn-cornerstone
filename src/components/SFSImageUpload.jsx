import { inject } from "snowball/app";
import { ImageUpload } from "nuclear";

export default inject(({ ctx }) => ({
    action: ctx.app.env.IMAGE_UPLOAD_URL,
    processSrc: (src) => `${ctx.app.env.SFS_URL}${src}`,
    processResp: (resp) => resp.fileName,
}))(ImageUpload)