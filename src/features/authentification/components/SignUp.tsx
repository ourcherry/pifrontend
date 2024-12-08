import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AlertDialogCustom } from '@/components/common/AlertDialogCustom';

export const SignUp = (): JSX.Element => {
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='grid gap-4'>
        <div className='grid gap-2'>
          <Label htmlFor='Company'>Company </Label>
          <Select>
            <SelectTrigger id='framework'>
              <SelectValue placeholder='Select' />
            </SelectTrigger>
            <SelectContent position='popper'>
              <SelectItem value='hmm'>HMM</SelectItem>
              <SelectItem value='sveltekit'>Hyundai Glovis</SelectItem>
              <SelectItem value='nuxt'>Tsakos</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='email'>ID</Label>
          <Input id='id' type='text' />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='password'>Password</Label>
          <Input id='password' type='password' />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='password'>Confirm password</Label>
          <Input id='password' type='password' />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='first-name'>First name</Label>
            <Input id='first-name' type='text' required />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='last-name'>Last name</Label>
            <Input id='last-name' type='text' />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='team'>Team</Label>
            <Input id='team' type='text' />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='position'>Position</Label>
            <Input id='position' type='text' />
          </div>
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' placeholder='guest@hos21.com' />
        </div>
      </div>
      <AlertDialogCustom
        button={SignUpButton}
        title='Sign Up'
        message='Are you sure to join our portal?'
      />
      <div className='mt-3 text-left text-sm text-muted-foreground'>
        💌 It usually takes 1-2 business days for a representative to verify.
        You will receive an email shortly once your account has been approved.
      </div>
    </form>
  );
};

const SignUpButton = (
  <Button type='submit' className='w-full mt-3'>
    Create an account
  </Button>
);
