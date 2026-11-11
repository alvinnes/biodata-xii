import { create } from "zustand";

type State = {
  isFetch: boolean;
  totalCertificates: number;
  categories: string[];
};

type Action = {
  setIsFetch: (isFetch: State["isFetch"]) => void;
  setTotalCertificates: (count: State["totalCertificates"]) => void;
  setCategories: (categories: State["categories"]) => void;
};

const useCertificatesStore = create<State & Action>()((set) => ({
  isFetch: false,
  totalCertificates: 0,
  categories: ["Semua"],
  setIsFetch: (isFetch) => set(() => ({ isFetch })),
  setTotalCertificates: (count) => set(() => ({ totalCertificates: count })),
  setCategories: (categories) => set(() => ({ categories })),
}));

export default useCertificatesStore;
