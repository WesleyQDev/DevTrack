import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://bb94-2804-d41-e06e-ea00-656e-9efb-db28-d3e7.ngrok-free.app",
    headers: {
        "ngrok-skip-browser-warning": "true"
      }
});
