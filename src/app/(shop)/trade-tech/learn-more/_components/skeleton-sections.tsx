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
        <div className="max-w-7xl mx-auto p-8 lg:p-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Camera className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="h-10 bg-muted rounded-lg w-80 mx-auto mb-4"></div>
            <div className="h-6 bg-muted rounded-lg w-96 mx-auto"></div>
          </div>

          {/* Main product image */}
          <div className="aspect-[16/10] bg-muted rounded-3xl mb-8 flex items-center justify-center">
            <ImageIcon className="w-20 h-20 text-muted-foreground/30" />
          </div>

          {/* Secondary images grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-muted rounded-xl flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-muted-foreground/30" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Overview */}
      <div className="w-full border-b muted-border">
        <div className="max-w-6xl mx-auto p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-muted rounded-lg w-64"></div>
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
        <div className="max-w-7xl mx-auto p-8 lg:p-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="h-8 bg-muted rounded-lg w-72 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-center space-y-6">
                <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center mx-auto">
                  <ImageIcon className="w-12 h-12 text-muted-foreground/30" />
                </div>
                <div className="space-y-3">
                  <div className="h-6 bg-muted rounded-lg w-32 mx-auto"></div>
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

      {/* Detailed Specifications */}
      <div className="w-full border-b muted-border bg-muted/10">
        <div className="max-w-6xl mx-auto p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-2 mb-6">
                <Ruler className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="h-8 bg-muted rounded-lg w-56 mb-6"></div>

              {/* Specs table placeholder */}
              <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="flex justify-between items-center py-3 border-b border-muted">
                    <div className="h-4 bg-muted rounded w-32"></div>
                    <div className="h-4 bg-muted rounded w-24"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-muted-foreground/30" />
              </div>
              <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-muted-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Materials & Construction */}
      <div className="w-full border-b muted-border">
        <div className="max-w-7xl mx-auto p-8 lg:p-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Palette className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="h-8 bg-muted rounded-lg w-96 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((section) => (
              <div key={section} className="space-y-6">
                <div className="aspect-[16/10] bg-muted rounded-2xl flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-muted-foreground/30" />
                </div>
                <div className="space-y-4">
                  <div className="h-6 bg-muted rounded-lg w-48"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded-lg w-full"></div>
                    <div className="h-4 bg-muted rounded-lg w-5/6"></div>
                    <div className="h-4 bg-muted rounded-lg w-4/5"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Stories */}
      <div className="w-full border-b muted-border bg-muted/20">
        <div className="max-w-6xl mx-auto p-8 lg:p-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <User className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="h-8 bg-muted rounded-lg w-80 mx-auto"></div>
          </div>

          <div className="space-y-16">
            {[1, 2, 3].map((story) => (
              <div key={story} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${story % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-6 ${story % 2 === 0 ? 'lg:order-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="h-7 bg-muted rounded-lg w-56"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-muted rounded-lg w-full"></div>
                      <div className="h-4 bg-muted rounded-lg w-5/6"></div>
                      <div className="h-4 bg-muted rounded-lg w-4/5"></div>
                      <div className="h-4 bg-muted rounded-lg w-3/4"></div>
                    </div>
                  </div>
                </div>
                <div className={`aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center ${story % 2 === 0 ? 'lg:order-1' : ''}`}>
                  <ImageIcon className="w-16 h-16 text-muted-foreground/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documentation Preview */}
      <div className="w-full border-b muted-border">
        <div className="max-w-6xl mx-auto p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="h-8 bg-muted rounded-lg w-64 mb-6"></div>

              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((doc) => (
                  <div key={doc} className="p-4 bg-muted/50 rounded-xl text-center space-y-3">
                    <div className="w-12 h-16 bg-muted rounded mx-auto flex items-center justify-center">
                      <FileText className="w-6 h-6 text-muted-foreground/50" />
                    </div>
                    <div className="h-3 bg-muted rounded w-16 mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-[3/4] bg-muted rounded-2xl flex items-center justify-center">
              <FileText className="w-20 h-20 text-muted-foreground/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Footer */}
      <div className="w-full bg-muted/30">
        <div className="max-w-4xl mx-auto p-8 lg:p-16 text-center space-y-8">
          <div className="space-y-4">
            <div className="h-10 bg-muted rounded-lg w-96 mx-auto"></div>
            <div className="h-5 bg-muted rounded-lg w-80 mx-auto"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-40 h-12 bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSections;