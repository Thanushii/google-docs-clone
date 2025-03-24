import { cn } from '@/lib/utils'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      
        
      
      {children}
    </div>
  )
}

export default Header