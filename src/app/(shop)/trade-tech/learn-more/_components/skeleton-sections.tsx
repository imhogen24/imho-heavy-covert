import {
  Image as ImageIcon,
  Camera,
  Layers,
  Palette,
  FileText,
  Package,
  Ruler,
  User
} from "lucide-react";

const SkeletonSections = () => {
  return (
    <div className="w-full">
      {/* Hero Product Gallery */}
      <div className="w-full border-b muted-border bg-muted/20">
        <div className="max-w-7xl mx-auto p-4 sm:p-8 lg:p-16">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Camera className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="h-8 sm:h-10 bg-muted rounded-lg w-full max-w-xs mx-auto mb-4"></div>
            <div className="h-5 sm:h-6 bg-muted rounded-lg w-full max-w-sm mx-auto"></div>
          </div>

          {/* Main product image */}
          <div className="aspect-[16/10] bg-muted rounded-3xl mb-8 flex items-center justify-center">
            <ImageIcon className="w-20 h-20 text-muted-foreground/30" />
          </div>

          {/* Secondary images grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-muted rounded-xl flex items-center justify-center">
                <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground/30" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Overview */}
      <div className="w-full border-b muted-border">
        <div className="max-w-6xl mx-auto p-4 sm:p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                <div className="h-6 sm:h-8 bg-muted rounded-lg w-full max-w-xs"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded-lg w-full"></div>
                  <div className="h-4 bg-muted rounded-lg w-5/6"></div>
                  <div className="h-4 bg-muted rounded-lg w-4/5"></div>
                  <div className="h-4 bg-muted rounded-lg w-3/4"></div>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-muted-foreground/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="w-full border-b muted-border">
        <div className="max-w-7xl mx-auto p-4 sm:p-8 lg:p-16">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="h-6 sm:h-8 bg-muted rounded-lg w-full max-w-sm mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-center space-y-4 sm:space-y-6">
                <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center mx-auto">
                  <ImageIcon className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground/30" />
                </div>
                <div className="space-y-3">
                  <div className="h-5 sm:h-6 bg-muted rounded-lg w-full max-w-32 mx-auto"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded-lg w-full"></div>
                    <div className="h-3 bg-muted rounded-lg w-4/5 mx-auto"></div>
                    <div className="h-3 bg-muted rounded-lg w-3/5 mx-auto"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon Footer */}
      <div className="w-full bg-muted/30">
        <div className="max-w-4xl mx-auto p-4 sm:p-8 lg:p-16 text-center space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="h-8 sm:h-10 bg-muted rounded-lg w-full max-w-sm mx-auto"></div>
            <div className="h-4 sm:h-5 bg-muted rounded-lg w-full max-w-xs mx-auto"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-32 sm:w-40 h-10 sm:h-12 bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSections;