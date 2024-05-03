import { Separator } from './ui/separator';

interface PlansProps {
  title: string;
  value: number;
  users: number;
}

export default function Plans({ title, value, users }: PlansProps) {
  return (
    <div className="bg-zinc-100 rounded-3xl pt-9 pb-12 px-7 flex flex-col items-center">
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-bold text-3xl text-primary-600">{title}</h2>
        <p className="text-secondary text-sm">up to {users} users</p>
      </div>
      <Separator className="bg-secondary mt-8 mb-7" />
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-3xl text-primary-600">
          $<span className="text-6xl">{value}</span>
        </h3>
        <p className="text-secondary text-sm">per month</p>
      </div>
      <button className="bg-destructive hover:bg-opacity-90 duration-150 w-full py-3 rounded-full text-zinc-100 mt-9">
        Order
      </button>
    </div>
  );
}
