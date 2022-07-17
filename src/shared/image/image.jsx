const Image = ({src, alt, ...rest}) => {
  return <img src={src} alt={alt} {...rest}></img>;
};

export default Image;
