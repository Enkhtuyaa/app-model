interface MainButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  big?: boolean;
}

export default function MainButton({
  children,
  onClick,
  big = false,
}: MainButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-[#3b5bdb] text-white font-bold text-[17px]
        rounded-[12px]
        ${big ? "py-[18px] px-[34px]" : "py-[14px] px-[26px]"}
      `}
    >
      {children}
    </button>
  );
}
