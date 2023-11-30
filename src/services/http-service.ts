import apiClient from "./api-client";

class HttpService {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.url, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

export default (url: string) => new HttpService(url);
