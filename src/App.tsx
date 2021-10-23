import { FormEvent, useEffect, useState } from 'react';

import * as Photos from './services/photos';
import PhotoItem from './components/PhotoItem';
import { Photo } from './types/Photo';

import * as C from './styles/App.styles';

function App() {

  const [photos, setPhotos] = useState<Photo[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const getPhotos = async () => {
    setIsLoading(true);
    setPhotos(await Photos.getAll());
    setIsLoading(false);
  }

  useEffect(() => {
    getPhotos();
  }, []);

  const handleFormSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const file = formData.get("image") as File;

    if(file && file.size > 0){
      setIsUploading(true);
      let result = await Photos.upload(file);
      setIsUploading(false);

      if(result instanceof Error){
        alert(`${result.name} - ${result.message}`);
      }
      else{
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  const deletePhoto = async (id: string) => {
    setIsDeleting(true);

    await Photos.remove(id);
    setPhotos(await Photos.getAll());

    setIsDeleting(false);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Firegram
        </C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image"/>
          <input type="submit" value="Submit"/>
          {
            isUploading && "Uploading..."
          }
          
          {
            isDeleting && "Deleting..."
          }
        </C.UploadForm>

        {
          isLoading &&
            <C.ScreenWarning>
              <div className="emoji">🤚</div>
              <h3>Loading...</h3>
            </C.ScreenWarning>
        }

        {
          !isLoading && photos.length > 0 &&
            <C.PhotoList>
              {
                photos.map((item, index)=>{
                  return (
                    <PhotoItem
                      key={index}
                      name={item.name}
                      url={item.url}
                      deletePhoto={deletePhoto} />
                  )
                })
              }
            </C.PhotoList>
        }

        {
          !isLoading && photos.length === 0 &&
            <C.ScreenWarning>
            <div className="emoji">😕</div>
            <h3>No registered images.</h3>
          </C.ScreenWarning>
        }

      </C.Area>
    </C.Container>
  );
}

export default App;
