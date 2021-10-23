import React, { useState } from 'react';

import {BsZoomIn} from 'react-icons/bs';
import {IoTrashBinSharp, IoClose} from 'react-icons/io5';

import Modal from 'react-modal';

import * as C from './styles';


Modal.setAppElement('#root');

type Props = {
    name: string;
    url: string;
    deletePhoto: (id: string) => Promise<void>;
}

const PhotoItem:React.FC<Props> = ({name, url, deletePhoto}) => {

    const [isDeletePhotoModalOpen, setIsDeletePhotoModalOpen] = useState(false);
    const openDeletePhotoModal = () => setIsDeletePhotoModalOpen(true);
    const closeDeletePhotoModal = () => setIsDeletePhotoModalOpen(false);
    
    const [isZoomPhotoModalOpen, setIsZoomPhotoModalOpen] = useState(false);
    const openZoomPhotoModal = () => setIsZoomPhotoModalOpen(true);
    const closeZoomPhotoModal = () => setIsZoomPhotoModalOpen(false);

    return (
        <C.Container>
            <img src={url} alt={name}/>
            
            <h4>{name}</h4>
            
            <section>
                <C.Button onClick={openZoomPhotoModal} title="Zoom in Photo">
                    <BsZoomIn />
                </C.Button>
                
                <C.Button remove onClick={openDeletePhotoModal} title="Delete Photo">
                    <IoTrashBinSharp />
                </C.Button>
            </section>

            <C.DeletePhotoModal
                isOpen={isDeletePhotoModalOpen}
                onRequestClose={closeDeletePhotoModal}
                contentLabel="Deleting Photo Modal"
                closeTimeoutMS={200}
            >
                
                <div className="closeIcon">
                    <C.Button onClick={closeDeletePhotoModal} primary>
                        <IoClose />
                    </C.Button>
                </div>

                <h2>Delete Photo</h2>

                <p>Are you sure you want to permanently delete this photo?</p>
                
                <section>
                    <button
                      onClick={()=>deletePhoto(name)}
                      className="yes"
                    >
                        Yes
                    </button>

                    <button
                      onClick={closeDeletePhotoModal}
                      className="no"
                    >
                        No
                    </button>
                </section>

            </C.DeletePhotoModal>

            <C.ZoomPhotoModal
                isOpen={isZoomPhotoModalOpen}
                onRequestClose={closeZoomPhotoModal}
                contentLabel="Zoom Photo Modal"
                closeTimeoutMS={200}
            >
                <div className="closeIcon">
                    <C.Button onClick={closeZoomPhotoModal} primary>
                        <IoClose />
                    </C.Button>
                </div>

                <section>
                    <img src={url} alt={name} />
                </section>
            </C.ZoomPhotoModal>
        </C.Container>
    )
}

export default PhotoItem
