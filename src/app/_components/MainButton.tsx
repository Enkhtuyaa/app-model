interface MainButtonType {
  number: number;
  label: string;
}

export const MainButton = (props: MainButtonType) => {
  const { label, number } = props;
  return (
    <div className="flex flex-col gap-2 justify-center items-center  ">
      <div className="w-[40px] h-[40px] rounded-full border-2 border-gray-400 flex justify-center items-center bg-white text-xl">
        {number}
      </div>

      <div className="text-2xl">{label}</div>
    </div>
  );
};
