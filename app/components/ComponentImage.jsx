import Image from "next/image";

const ComponentImage = ({ image, styles, stylesImg }) => {
  return (
    <div className={styles}>
      <Image className={stylesImg} src={image} width={506} height={619} />
    </div>
  );
};

export default ComponentImage;