import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const NotFoundPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 2000)
  })

  return (
    <div>
      404 - REDIRECTING
    </div>
  )
}

export default NotFoundPage;