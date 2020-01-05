import { Server } from "./core/Server";
import { Sfs } from "./core/Sfs";
import SFSImageUpload, { SFSImageUploadFormItem } from "./components/SFSImageUpload";
import { AppConfiguration } from "./AppConfiguration";


window.Cornerstone = {
    Server,
    Sfs,
    SFSImageUpload,
    SFSImageUploadFormItem,
    AppConfiguration,
};

export {
    Server,
    SFSImageUpload,
    SFSImageUploadFormItem,
    Sfs,
    AppConfiguration
};
