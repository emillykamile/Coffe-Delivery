import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 104px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  position: sticky;
  top: 0;

  background: ${(props) => props.theme.colors['brown-100']};
  z-index: 9999;

  img {
    width: 80px;
    height: 40px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

