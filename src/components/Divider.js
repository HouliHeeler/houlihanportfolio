import { forwardRef } from "react"

const Divider = forwardRef(({ name }, ref) => {
  return (
    <div className="divider" ref={ref}>
      <span></span>
        <span className="divider--title">{name}</span>
      <span></span>
    </div>
  )
})

export default Divider