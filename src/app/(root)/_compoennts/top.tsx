import { HERO_ICONS } from '@/lib/constants';


const TopSection = () => {
  return (

    <div className="relative grid grid-rows-1 grid-flow-col md:grid-cols-7 grid-cols-5 border-b border-muted w-full">
      {HERO_ICONS.map((icon) => (
        <div
          key={icon.idx}
          className="group w-full h-full aspect-square relative border-l border-muted"
        >
          {/* Grid cells */}
          <div className="grid grid-cols-2">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="aspect-square border-r border-b border-muted/25"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopSection;


 {/* Circle with icon */}
          {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute -top-24 -left-24 size-48 rounded-full border border-muted bg-background flex items-center justify-center">
                {icon.icon && (
                  <icon.icon className="size-24 transition-transform group-hover:scale-110" />
                )}
              </div>
            </div>
          </div> */}
