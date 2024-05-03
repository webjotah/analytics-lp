import Image from 'next/image';

interface ContentSectionProps {
  title: string;
  content: string;
  image: string;
}

export default function ContentSection({
  title,
  content,
  image,
}: ContentSectionProps) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-primary leading-tight">
          {title}
        </h1>
        <p className="text-secondary">{content}</p>
      </div>
      <Image src={image} alt="content image" />
    </div>
  );
}
