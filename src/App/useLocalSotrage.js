import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [sinchronizedItem, setSinchronizedItem] = React.useState(true)
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
        setSinchronizedItem(true)
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [sinchronizedItem]);

  const sinchronize = () => {
    setLoading(true);
    setSinchronizedItem(false)
  }

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sinchronize
  };
}

export { useLocalStorage };