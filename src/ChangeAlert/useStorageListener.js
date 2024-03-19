import React from "react";

function useStorageListener(sinchronize) {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener('storage', (change) => {
    if (change.key === 'TODOS_V1') {
      console.log('Hubo cambios en TODOS_V1')
      setStorageChange(true)
    }
  })

  const toggleShow = () => {
    sinchronize();
    setStorageChange(false)
  }

  return {
    show: storageChange,
    toggleShow: toggleShow
  }
}


export {useStorageListener}