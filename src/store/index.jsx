import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState } = createGlobalState({
  alert: { show: false, msg: '', color: '' },
  contract: null,
  supply: 100,
  connectedAccount: '',
})

const setAlert = (msg, color = 'amber') => {
  setGlobalState('alert', { show: true, msg, color })
  setTimeout(() => {
    setGlobalState('alert', { show: false, msg: '', color })
  }, 5000)
}

export { useGlobalState, setGlobalState, setAlert }
