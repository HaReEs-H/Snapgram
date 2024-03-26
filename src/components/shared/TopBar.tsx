import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutation'
import { useEffect } from 'react'
import { useUserContext } from '@/context/AuthContext'

export const TopBar = () => {
  const { user } = useUserContext()
  const { mutate: signOut, isSuccess } = useSignOutAccount()
  const navigate = useNavigate()
  useEffect(() => {
    if (isSuccess) {
      navigate(0)
    }
  }, [isSuccess, navigate])
  return (
    <div>
      <section className="topbar">
        <div className="flex-between py-4 px-5">
          <Link to="/" className="flex gap-3 items-center">
            <img
              src="/assets/images/logo.svg"
              alt="logo"
              width={130}
              height={325}
            />
          </Link>
          <div className="flex gap-4">
            <Button
              onClick={() => signOut()}
              variant="ghost"
              className="shad-button_ghost"
            >
              <img src="/assets/icons/logout.svg" alt="logout" />
            </Button>
            <Link to={`/profile/${user.id}`} className="flex-center gap-3">
              <img
                src={user.imageUrl || '/assets/images/profile-placeholder.svg'}
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
