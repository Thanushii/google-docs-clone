import { cn } from '@/lib/utils'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      
        <span className="text-xl font-semibold text-white">cloudSync</span>
      
      {children}
    </div>
  )
}

export default Header