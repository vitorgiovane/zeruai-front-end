import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #f4a40f;
    padding: 8px;
    border-radius: 4px;
    font-size: 13px;
    color: #eee;
    font-weight: 500;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.4s ease, opacity 0.4s ease;

    position: absolute;
    bottom: calc(100% + 10px);

    left: 64%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: #f4a40f transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
