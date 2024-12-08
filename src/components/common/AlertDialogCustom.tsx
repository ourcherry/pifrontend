import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface AlertDialogProps {
  button: JSX.Element;
  title?: string;
  message?: string;
  cancel?: string;
  ok?: string;
  handleFunction?: (event: Event) => void;
}

export const AlertDialogCustom = (props: AlertDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{props.button}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props?.title}</AlertDialogTitle>
          <AlertDialogDescription>{props?.message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{props?.cancel || `Cancel`}</AlertDialogCancel>
          <AlertDialogAction>{props?.ok || `OK`}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
