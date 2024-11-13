

import { saveAs } from "file-saver";

export default function UseWriteTofile(string, fileLocation){
    var blob = new Blob([string], { type: "text/plain;charset=utf-8" });
    saveAs(blob, fileLocation);

}