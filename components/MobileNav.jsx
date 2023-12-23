import { Sheet, SheetContent, SheetTrigger} from './ui/sheet';
import { AlignJustify } from 'lucide-react';

import Navbar from "./Navbar";
import Logo from "./Logo";

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <AlignJustify className='cursor-pointer' />
        </SheetTrigger>

        <SheetContent>
            Content
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav