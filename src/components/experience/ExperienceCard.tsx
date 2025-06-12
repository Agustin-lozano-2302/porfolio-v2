type Experience = {
  logo: string;
  alt: string;
  title: string;
  period: string;
  description: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
};

export default function ExperienceCard({
  logo,
  alt,
  title,
  period,
  description,
  isHovered,
  onHover,
  onLeave,
}: Experience) {

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`transition-all duration-300 border border-white rounded-md p-4 bg-black cursor-pointer ${
         "w-[300px] h-[300px]"
      } overflow-hidden`}
    >
      <img
        src={logo}
        alt={alt}
        className="w-full h-auto object-contain max-h-20 mx-auto"
      />

      {isHovered && (
        <div
          className="mt-4 text-white"
        >
          <div className="font-bold">{title}</div>
          <div className="text-sm mb-2">{period}</div>
          <p className="text-sm">{description}</p>
        </div>
      )}
    </div>
  );
}

