import Image from "next/image";

const ComponentImage = ({ image }) => {
  return (
    <div className=" flex items-end pt-[18.3rem] ml-8 ">
      <Image className="" src={image} width={506} height={619} />
    </div>
  );
};

export default ComponentImage;
