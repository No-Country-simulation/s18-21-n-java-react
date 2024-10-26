import { Button } from "@/components/ui/button";

export default function ContinueButton({children}) {
  return (
    <Button className="w-full sm:w-auto mt-4 bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 text-sm sm:text-base">
      {children}
    </Button>
  );
}
