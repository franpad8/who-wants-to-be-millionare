import { Link } from 'react-router-dom'

const Button = (props) => {
  let className = `${props.className || ''} bg-primary rounded-full p-3 
    text-lg ring-slate-100 ring-[1px] focus:ring-offset-1 hover:ring-offset-1
    transition-all duration-200 cursor-pointer disabled:cursor-not-allowed 
    disabled:ring-0 disabled:ring-offset-0 disabled:text-slate-600
    disabled:bg-primary/[.54]`

  if (props.type === 'lg') {
    className += ' w-[100%]'
  }

  if (props.to) {
    return <Link {...props} className={className} />
  }

  return <button {...props} className={className} />
}

export default Button
