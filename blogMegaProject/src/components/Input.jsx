import React,{useId} from 'react'

const Input=React.forwardRef(({
    label,
    type="text",
    classname="",
    ...props
},ref)=>{
 
    const id=useId()
  return (
    <div className='w-full'>
        (label && <label className='' 
        htmlFor={id} ></label>)
        <input type={type} className={`${classname}`} ref={ref} />
    </div>
  )
}
)

export default Input
