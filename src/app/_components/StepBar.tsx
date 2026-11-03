type StepStatus = "done" | "current" | "upcoming";
interface StepDotProps {
  number: number;
  label: string;
  status: StepStatus;
}
const StepDot = ({ number, label, status }: StepDotProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div
        className={`w-10 h-10 rounded-full  border-2 flex justify-center items-center font-bold ${
          status === "current"
            ? "bg-[#3b5bdb] text-white"
            : "bg-white border-[#dfe4ee] text-[#5a6478]"
        }`}
      >
        {number}
      </div>
      <div className="font-bold text-[15px] text-[#1d2433]">{label}</div>
    </div>
  );
};
export const StepBar = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <StepDot number={1} label="Upload" status="done" />
      <StepDot number={2} label="Label" status="current" />
      <StepDot number={3} label="Train" status="upcoming" />
      <StepDot number={4} label="Test" status="upcoming" />
    </div>
  );
};
