interface StepCardProps {
  title: string;
  children: React.ReactNode;
}
export default function StepCard({ title, children }: StepCardProps) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-[#dfe4ee] bg-white p-5 md:p-7">
      <h2 className="text-2xl font-bold text-[#1d2433]">{title}</h2>
      {children}
    </div>
  );
}
