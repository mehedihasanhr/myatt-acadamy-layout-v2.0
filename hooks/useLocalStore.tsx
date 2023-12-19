import * as React from 'react';

export const useLocalStore = (key: string, init?: any ) => {
    const [store, setStore] = React.useState(init);
    
    // get store from localStore 
    React.useEffect(() => {
        const store = localStorage.getItem(key);
        if (store) {
            setStore(JSON.parse(store));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // set store to localStore
    const setLocalStorage = (value: any) => {
        // store on localStore
        const store = JSON.stringify(value);
        localStorage.setItem(key, store);

        setStore(value);
    }


    return [store, setLocalStorage]
}