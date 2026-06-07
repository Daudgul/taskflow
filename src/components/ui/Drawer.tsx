import type { ReactNode } from "react";

type DrawerProps = {
  children: ReactNode;
};

function Drawer({ children }: DrawerProps) {
  return (
    <div className="fixed inset-0 bg-black/30">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-6 shadow-xl">
        {children}
      </div>
    </div>
  );
}

export default Drawer;
