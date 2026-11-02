import { BackButton } from "./_components/BackButton";
import { MainButton } from "./_components/MainButton";
import { StepBar } from "./_components/StepBar";
import { StepCard } from "./_components/StepCard";
export default function Home() {
  return (
    <div className="flex justify-center py-10 bg-gray-300">
      <div className="w-[1200px] h-[1000px] rounded-2xl border">
        <div className="flex justify-between pt-14 px-28 ">
          <StepBar number={1} label={"Upload"} />
          <StepCard number={2} label={"Label"} />
          <MainButton number={3} label="Train" />
          <BackButton number={4} label="Test" />
        </div>
      </div>
    </div>
  );
}
