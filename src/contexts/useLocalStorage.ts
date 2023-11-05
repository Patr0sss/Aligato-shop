import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}

// type cartItemBar = {
//   // name: string;
//   // picture: string;
//   quantity: number;
//   id: string;
//   // price: string;
// };
// export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
//   const [value, setValue] = useState<T>(() => {
//     const jsonValue = localStorage.getItem(key);
//     if (jsonValue != null) return JSON.parse(jsonValue);

//     if (typeof initialValue === "function") {
//       return (initialValue as () => T)();
//     } else {
//       return initialValue;
//     }
//   });

//   const { userInfo } = useUserInfo();
//   const updateCartFirebase = async (item: cartItemBar) => {
//     if (userInfo.uid) {
//       const cartItemRef = doc(
//         db,
//         "usersCarts",
//         userInfo.uid,
//         "cart",
//         JSON.stringify(item.id)
//       );

//       await setDoc(cartItemRef, { item });
//     }
//   };
//   useEffect(() => {
//     // localStorage.setItem(key, JSON.stringify(value));

//     updateCartFirebase;
//   }, [key, value]);

//   return [value, setValue] as [typeof value, typeof setValue];
// }
