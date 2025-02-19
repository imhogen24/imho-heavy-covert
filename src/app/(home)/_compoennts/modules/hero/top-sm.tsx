

const SmTop = () => {
  return (
    <div className="w-full border-b muted-border">
      {/* Large Screen Version */}
      <div className="hidden md:block">
        <div className="relative w-full" style={{ aspectRatio: "6/1" }}>
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-2 gap-0">
            {/* Half Left Circle */}
            <div className="relative row-span-2 col-span-1">
              <div className="absolute inset-0">
                <div className="absolute w-[200%] h-full rounded-full border muted-border -left-full"></div>
              </div>
            </div>
            {/* Full Circle 1 */}
            <div className="relative border-x muted-border row-span-2 col-span-2">
              <div className="absolute inset-0">
                <div className="flex justify-center items-center w-full h-full rounded-full border muted-border">
                  <div className="w-1/2 h-1/2">
                    <img
                      src="/obelisk.svg"
                      alt="imho-logo"
                      className="w-full h-full opacity-40 object-contain dark:hidden"
                    />
                    <img
                      src="/obelisk.svg"
                      alt="imho-logo"
                      className="w-full opacity-10 h-full object-contain hidden dark:block"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* circle 2*/}
            <div className="relative row-span-2 col-span-2">
              <div className="absolute inset-0">
                <div className="flex justify-center items-center w-full h-full rounded-full border muted-border">
                  <div className="w-1/2 h-1/2">
                    <img
                      src="/heaven-and-earth.svg"
                      alt="imho-logo"
                      className="w-full h-full opacity-40 object-contain dark:hidden"
                    />
                    <img
                      src="/heaven-and-earth.svg"
                      alt="imho-logo"
                      className="w-full h-full opacity-10 object-contain hidden dark:block"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Logo Circle */}
            <div className="relative row-span-2 col-span-2 border-x muted-border">
              <div className="absolute inset-0">
                <div className="w-full h-full rounded-full border muted-border flex items-center justify-center">
                  <div className="w-1/2 h-1/2">
                    <img
                      src="/logos/imho-outlined.png"
                      alt="imho-logo"
                      className="w-full h-full object-contain dark:hidden"
                    />
                    <img
                      src="/logos/imho-outlined.png"
                      alt="imho-logo"
                      className="w-full h-full object-contain hidden dark:block"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* circle 3 */}
            <div className="relative row-span-2 col-span-2">
              <div className="absolute inset-0">
                <div className="flex justify-center items-center w-full h-full rounded-full border muted-border">
                  <div className="w-1/2 h-1/2">
                    <img
                      src="/sun.svg"
                      alt="imho-logo"
                      className="w-full h-full opacity-40 object-contain dark:hidden"
                    />
                    <img
                      src="/sun.svg"
                      alt="imho-logo"
                      className="w-full h-full opacity-10 object-contain hidden dark:block"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Full Circle 4 */}
            <div className="relative row-span-2 col-span-2 border-x muted-border">
              <div className="absolute inset-0">
                <div className="flex justify-center items-center w-full h-full rounded-full border muted-border">
                  <div className="w-1/2 h-1/2">
                    <img
                      src="/pyramid.svg"
                      alt="imho-logo"
                      className="w-full h-full opacity-40 object-contain dark:hidden"
                    />
                    <img
                      src="/pyramid.svg"
                      alt="imho-logo"
                      className="w-full h-full opacity-10 object-contain hidden dark:block"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Half Right Circle */}
            <div className="relative row-span-2 col-span-1">
              <div className="absolute inset-0">
                <div className="absolute w-[200%] h-full rounded-full border muted-border -right-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen Version */}
      <div className="md:hidden">
        <div className="relative w-full" style={{ aspectRatio: "4/1" }}>
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-2 gap-0">
            {/* Half Left Circle */}
            <div className="relative row-span-2 col-span-1">
              <div className="absolute inset-0">
                <div className="absolute w-[200%] h-full rounded-full border muted-border -left-full"></div>
              </div>
            </div>
            {/* Logo Circle */}
            <div className="relative row-span-2 col-span-2 border-x muted-border">
              <div className="absolute inset-0">
                <div className="w-full h-full rounded-full border muted-border flex items-center justify-center">
                  <div className="w-1/2 h-1/2">
                    <img
                      src="/heaven-and-earth.svg"
                      alt="imho-logo"
                      className="w-full h-full opacity-40 object-contain dark:hidden"
                    />
                    <img
                      src="/heaven-and-earth.svg"
                      alt="imho-logo"
                      className="w-full h-full opacity-10 object-contain hidden dark:block"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* circle 2*/}
            <div className="relative row-span-2 col-span-2">
              <div className="absolute inset-0">
                <div className="flex justify-center items-center w-full h-full rounded-full border muted-border">
                  <div className="w-1/2 h-1/2">
                    <img
                      src="/logos/imho-outlined.png"
                      alt="imho-logo"
                      className="w-full h-full  object-contain dark:hidden"
                    />
                    <img
                      src="/logos/imho-outlined.png"
                      alt="imho-logo"
                      className="w-full h-full  object-contain hidden dark:block"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Full Circle 4 */}
            <div className="relative row-span-2 col-span-2 border-x muted-border">
              <div className="absolute inset-0">
                <div className="flex justify-center items-center w-full h-full rounded-full border muted-border">
                  <div className="w-1/2 h-1/2">
                    <img
                      src="/pyramid.svg"
                      alt="imho-logo"
                      className="w-full h-full opacity-40 object-contain dark:hidden"
                    />
                    <img
                      src="/pyramid.svg"
                      alt="imho-logo"
                      className="w-full h-full opacity-10 object-contain hidden dark:block"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Half Right Circle */}
            <div className="relative row-span-2 col-span-1">
              <div className="absolute inset-0">
                <div className="absolute w-[200%] h-full rounded-full border muted-border -right-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmTop;
