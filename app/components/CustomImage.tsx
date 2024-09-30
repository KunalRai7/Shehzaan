import Image, { ImageProps } from 'next/image';

const customLoader = ({ src }: { src: string }) => {
  return `${src}`;
};

export default function CustomImage(props: ImageProps) {
  return <Image {...props} loader={customLoader} unoptimized />;
}