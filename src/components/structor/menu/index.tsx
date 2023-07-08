import { Dogs, Login } from '../../../assets/images/index'

const Menu = () => {
  return (
    <>
      <header className="border-b fixed z-10 w-full shadow">
        <nav className="max-w-[50rem] m-auto flex justify-between items-center p-5">
          <figure>
            <img src={Dogs} alt="logo" />
          </figure>

          <div className="flex items-center gap-3">
            <span>Login / Criar</span>
            <img src={Login} alt="User icon" />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Menu
