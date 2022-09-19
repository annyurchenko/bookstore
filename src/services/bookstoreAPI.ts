import axios from "axios";
import { IBooks } from "types/types";

enum Endpoint {
  NEW = "new",
}

class BookstoreAPI {
  private readonly BASE_URL = process.env.REACT_APP_BOOKS_BASE_URL as string;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllBooks() {
    const { data } = await this.API.get<IBooks>(Endpoint.NEW);

    return data;
  }
}

export const bookstoreAPI = new BookstoreAPI();
