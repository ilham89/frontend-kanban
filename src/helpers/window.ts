export const setWindowLocation = (value: string) => {
  if (typeof window !== "undefined") {
    window.location.href = value;
  }
};

export const windowLocalStorage = (
  type: "clear" | "set" | "get" | "remove",
  key = "",
  value: any = null,
): any => {
  if (typeof window !== "undefined") {
    switch (type) {
      case "clear":
        window.localStorage.clear();
        break;
      case "set":
        window.localStorage.setItem(key, value);
        break;
      case "remove":
        window.localStorage.removeItem(key);
        break;
      case "get":
        return window.localStorage.getItem(key);
    }
  }
};

export const windowSessionStorage = (
  type: "clear" | "set" | "get" | "remove",
  key = "",
  value: any = null,
): any => {
  if (typeof window !== "undefined") {
    switch (type) {
      case "clear":
        window.sessionStorage.clear();
        break;
      case "set":
        window.sessionStorage.setItem(key, value);
        break;
      case "remove":
        window.sessionStorage.removeItem(key);
        break;
      case "get":
        return window.sessionStorage.getItem(key);
    }
  }
};
