import { Server } from "./core/Server";
import { Sfs } from "./core/Sfs";
import SFSImageUpload, { SFSImageUploadFormItem } from "./components/SFSImageUpload";


window.Cornerstone = {
    Server,
    Sfs,
    SFSImageUpload,
    SFSImageUploadFormItem
};

export { Server, SFSImageUpload, SFSImageUploadFormItem, Sfs };