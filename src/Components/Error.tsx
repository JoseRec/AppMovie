import type { ReactNode } from "react";

export default function Error({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center my-10 animate-fade-in">
      <div
        className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 w-3xl text-center"
        role="alert"
      >
        <p className="font-bold">Error el buscar la Pelicula</p>
        <p>{children}</p>
      </div>
    </div>
  );
}
