import { FaClipboard } from "react-icons/fa";
import { AlertDialogDescription } from "@/components/ui/alert-dialog";

export function CreateSuccessPopup({ short }: { short: string | undefined }) {
  const currentPath = location.href;

  async function copyToClipBoard() {
    await navigator.clipboard.writeText(`${currentPath}${short}`);
  }

  return (
    <AlertDialogDescription className="flex flex-row items-center justify-center space-x-1">
      <FaClipboard
        className="h-6 w-6 cursor-pointer"
        onClick={async () => {
          await copyToClipBoard();
        }}
      />

      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        {`${currentPath}${short}`}
      </code>
    </AlertDialogDescription>
  );
}
