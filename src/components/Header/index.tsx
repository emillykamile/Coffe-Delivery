// Imagens, Icones e Logos.
import LightLogoCoffeeDelivery from '../../assets/logo-light.svg'
import DarkLogoCoffeeDelivery from '../../assets/logo.svg'

// Hooks
import { useSwitchTheme } from '../../hooks/useSwitchTheme';

// Estilos
import { HeaderContainer } from "./styles";


// Troca de Temas
const { toggleTheme, themeSelected } = useSwitchTheme()

function handleToggleTheme() {
  toggleTheme(themeSelected === 'light' ? 'dark' : 'light')
}

export function Header(){
  return (
    <HeaderContainer>
     <img
        src={
          themeSelected === 'light'
        ? DarkLogoCoffeeDelivery
        : LightLogoCoffeeDelivery
      }
        alt="Copo de café"
      />
      <div>
        {/* API de Local 
        Dark Theme 
        Voltar para Home 
        Carrinho  */}
      </div>

  
    </HeaderContainer>
  )
}
