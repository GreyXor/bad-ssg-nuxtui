export const useServerStore = defineStore("server", {
  state: () => ({
    host: "http://127.0.0.1:55555",
    lastReqError: false,
  }),

  persist: true,
});
