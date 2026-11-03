import { StepBar } from "./_components/StepBar";
import StepCard from "./_components/StepCard";
export default function Home() {
  return (
    <div className="flex justify-center py-10 bg-[#f5f6fa]">
      <div className="w-[1200px] rounded-2xl border border-[#dfe4ee]">
        <div className="flex flex-col pt-14 px-28 ">
          <StepBar />
          <StepCard title="Step 1: Add your photos">
            <p></p>
          </StepCard>
        </div>
      </div>
    </div>
  );
}
