import Image, { ImageProps } from 'next/image';

const customLoader = ({ src }: { src: string }) => {
  return `${src}`;
};

export default function CustomImage({ alt, ...props }: ImageProps) {
  return <Image alt={alt} {...props} loader={customLoader} unoptimized />;
}