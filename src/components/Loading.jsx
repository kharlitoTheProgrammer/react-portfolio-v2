export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-10 bg-[#1A2421]">
      <div className="animate-spin flex flex-col justify-center items-center h-15 w-15 border-t-4 border-white rounded-full"></div>
      <p className="text-[#A49581] text-xl special-gothic-expanded-one-regular">
        Loading
      </p>
    </div>
  );
}
