import Image from "next/image";

type Props = {
  placeholder: string;
  /** Coloque a foto em /public/images e passe o caminho, ex.: "/images/hero.jpg" */
  src?: string;
  alt?: string;
  priority?: boolean;
};

/** Slot de imagem: mostra a foto quando `src` existe, senão o placeholder. */
export default function ImageSlot({ placeholder, src, alt = "", priority }: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt || placeholder}
        fill
        priority={priority}
        quality={90}
        sizes="(min-width: 1320px) 1272px, 100vw"
        className="object-cover"
      />
    );
  }
  return (
    <div className="absolute inset-0 flex select-none items-center justify-center bg-[#f2f1ef] p-4 text-center font-sans text-[13px] text-[#6e6c66]">
      {placeholder}
    </div>
  );
}
