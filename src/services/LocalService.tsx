export const USER_INFO = "USER_INFO";

export const localStorageService = {
    setUserLocal: (data:any) => {
        let dataJson = JSON.stringify(data);
        localStorage.setItem(USER_INFO, dataJson);
    },
    getUserLocal: () => {
        let dataJson = localStorage.getItem(USER_INFO);
        if (dataJson) {
            return JSON.parse(dataJson);
        }
        return null;
    },
    removeUserLocal: () => {
        let dataJson = localStorage.getItem(USER_INFO);
        if (dataJson) {
            localStorage.removeItem(USER_INFO);
        }
    },
};


