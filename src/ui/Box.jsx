const Box = (props) => {
  let className = `bg-black rounded-full py-1 px-10 
    text-2xl ring-slate-100 ring-[1px] focus:ring-offset-1
    hover:ring-offset-1 transition-all duration-200 disabled:cursor-not-allowed
    font-sans text-center `

  if (props.type === 'button') {
    className += `text-left cursor-pointer ${props.className || ''}`

    return <button {...props} className={className} />
  }

  className += props.className || ''

  return <div {...props} className={className} />
}

export default Box
