import React, { useEffect, useState } from 'react';

const placeholder = 'data:image/png;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

const LazyImage: React.FC<any> = ({img}) => {
  const imgDetails = img.props;
  const [imageSrc, setImageSrc] = useState<string>(placeholder);
  const [imageRef, setImageRef] = useState<any>();

  useEffect (() => {
    if (imageRef && imageSrc === placeholder) {
      if (IntersectionObserver) {
        // IntersectionObserver takes a callback and options as its parameters
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(imgDetails.src); // only set the image if the viewport contains the image
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.50,
          rootMargin: '0px 0px 150px 0px'
        });
        observer.observe(imageRef);
      } else {
        setImageSrc(imgDetails.src);
      }
    }
  }, [imgDetails.src, imageSrc, imageRef]);

  return <img
    alt={imgDetails.alt || 'Image'}
    onClick={imgDetails.onClick || null}
    height={imgDetails.height}
    width={imgDetails.width}
    ref={setImageRef}
    src={imageSrc}/>
};

export default LazyImage;