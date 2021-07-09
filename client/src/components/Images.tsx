import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const selfHostedPhotos = [
  'https://res.cloudinary.com/dwfpadggi/image/upload/v1623755716/netues3sqgrnknvtiozm.jpg',
  'https://res.cloudinary.com/dwfpadggi/image/upload/v1623755706/ne5vuxnffpkvbor9wq3k.jpg',
  'https://res.cloudinary.com/dwfpadggi/image/upload/v1623753423/vafagxqg0aiwxfgcamuw.jpg',
  'https://res.cloudinary.com/dwfpadggi/image/upload/v1623743165/sample.jpg',
]

interface Props {
  setQuizDetails: (arg1: any) => void;
}

const Images: React.FC<Props> = ({setQuizDetails}) => {

  const [photos, setPhotos] = useState<any[]>([]);
  const [selfPhotos, setSelfPhotos] = useState<Array<string>>(selfHostedPhotos);

  useEffect(() => {
    fetchImages(); // figure out a way to not call the unsplash API if rate limit is hit
  }, []);

  const fetchImages = async () => {
    try {
      let { data } = await axios('/api/photos');
      console.log(data.response);
      setPhotos(data.response);
    } catch(err) {
      // potentially because limit is hit
      console.error(err);
    }
  }

  const updateUrlOnClick = (e: any) => {
    setQuizDetails((prevQuizDetails: any) => {return {...prevQuizDetails, photoUrl: e.target.src}});
  }

  if (photos) {
    return (
      <>
        {photos.map((value: any, index: number) => {
          const img = (<img src={value.urls.full} height="298" width="298" alt={value.alt_description} onClick={updateUrlOnClick}/>);
          return (
            <Card key={value.id} img={img} id={value.id}/>
          )
        })}
      </>
    )
  } else {
    return (
      <>
        {selfPhotos.map((value: string, index: number) => {
          const img = (<img src={value} height="298" width="298" alt="Image" onClick={updateUrlOnClick}/>);
          return (
            <Card key={index} img={img}/>
          )
        })}
      </>
    )
  }


}

export default Images;