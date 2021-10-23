import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import {ref, listAll, getDownloadURL, uploadBytes, deleteObject} from "firebase/storage";
import { v4 as createId} from 'uuid';

export const getAll = async () => {
    let list:Photo[] = [];

    const imagesFolderRef = ref(storage, "images");
    const photoList = await listAll(imagesFolderRef);

    for(let i in photoList.items){

        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
    }

    return list;
}

export const upload = async(file: File) =>{
    if(["image/jpeg", "image/jpg", "image/png"].includes(file.type)){
        
        let randomName = createId();
        let newFile = ref(storage, `images/${randomName}`);

        let upload = await uploadBytes(newFile, file);

        let photoUrl = await getDownloadURL(upload.ref);
        
        return { name: upload.ref.name, url: photoUrl } as Photo;

    }
    return new Error("File type not allowed.")
}

export const remove = async(id: string) => {
    try {
        const removingPhotoRef = ref(storage, `images/${id}`);
        await deleteObject(removingPhotoRef);

    } catch (error) {
        return new Error("An error has ocurred when trying to delete photo.")
    }
}