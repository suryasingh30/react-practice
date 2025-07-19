import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom= atom({
    key: 'countAtom',
    default: 0
});

export const evenSelector = selector({
    key
})