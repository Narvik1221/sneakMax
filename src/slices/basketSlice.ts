// Импортируем функции createAsyncThunk и createSlice из библиотеки Redux Toolkit
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// Импортируем библиотеку axios для выполнения HTTP-запросов
import axios from "axios";

// Определяем интерфейс ISneakers для типизации данных кроссовок
export interface ISneakers {
  color: string; // Цвет кроссовок
  compound: string; // Материал верха
  country: string; // Страна производства
  description: string; // Описание кроссовок
  gender: string; // Пол (мужской/женский)
  id: number; // Уникальный идентификатор
  imgUrl: string; // URL изображения
  inStock: number; // Количество на складе
  oldPrice: number; // Старая цена
  price: number; // Текущая цена
  sizes: number[]; // Доступные размеры
  stars: number; // Рейтинг (звезды)
  title: string; // Название модели
  vendorСode: string; // Код производителя
}

// Определяем базовый URL для API
const BASE_URL: string = "https://91e76ca43b25a69c.mokky.dev";

// Создаем асинхронный экшен для получения корзины
export const fetchBasket = createAsyncThunk<ISneakers[]>(
  "basket/fetchBasket", // Название экшена
  async (): Promise<ISneakers[]> => {
    // Асинхронная функция, возвращающая массив кроссовок
    try {
      // Выполняем GET-запрос к API для получения данных корзины
      const { data } = await axios.get<ISneakers[]>(`${BASE_URL}/basket/`);

      return data; // Возвращаем полученные данные
    } catch (error) {
      console.log("Failed to fetch:"); // Логируем ошибку, если запрос не удался
      return []; // Возвращаем пустой массив в случае ошибки
    }
  }
);

// Создаем асинхронный экшен для добавления кроссовка в корзину
export const postBasket = createAsyncThunk<ISneakers, ISneakers>(
  "basket/postBasket", // Название экшена
  async (item) => {
    // Принимаем объект кроссовка для добавления
    try {
      // Выполняем POST-запрос к API для добавления кроссовка в корзину
      const { data } = await axios.post(`${BASE_URL}/basket`, item);
      console.log(data);
      return data; // Возвращаем добавленный объект кроссовка
    } catch (error) {
      throw new Error("Failed to post basket"); // Генерируем ошибку при неудаче
    }
  }
);

// Создаем асинхронный экшен для удаления кроссовка из корзины
export const delBasket = createAsyncThunk<number, number>(
  "basket/delBasket", // Название экшена
  async (id) => {
    // Принимаем идентификатор кроссовка для удаления
    try {
      // Выполняем DELETE-запрос к API для удаления кроссовка из корзины
      await axios.delete(`${BASE_URL}/basket/${id}`);

      return id; // Возвращаем идентификатор удаленного кроссовка
    } catch (error) {
      throw new Error("Failed to delete basket"); // Генерируем ошибку при неудаче
    }
  }
);

// Определяем интерфейс состояния корзины
interface IState {
  data: ISneakers[]; // Массив кроссовок в состоянии корзины
  isOpen: boolean;
  isPageOpen: boolean;
  isProductOpen: boolean;
  totalCount: number;
  totalPrice: number;
  selectedProduct: ISneakers | null;
}

// Начальное состояние корзины
const initialState: IState = {
  data: [], // Изначально корзина пуста
  isOpen: false,
  isPageOpen: true,
  isProductOpen: false,
  totalCount: 0,
  totalPrice: 0,
  selectedProduct: null,
};

// Создаем срез состояния для корзины с помощью createSlice
export const basketSlice = createSlice({
  name: "basket", // Имя среза состояния
  initialState, // Начальное состояние
  reducers: {
    setSelectedProduct(state, action: PayloadAction<ISneakers | null>) {
      state.selectedProduct = action.payload;
    },
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setIsPageOpen(state, action: PayloadAction<boolean>) {
      state.isPageOpen = action.payload;
    },
    setIsProductOpen(state, action: PayloadAction<boolean>) {
      state.isProductOpen = action.payload;
    },
    calculateTotalCount(state) {
      state.totalCount = state.data.length; // Количество элементов равно длине массива `data`
    },
    // Метод для подсчета общей суммы товаров в корзине
    calculateTotalPrice(state) {
      state.totalPrice = state.data.reduce((sum, item) => sum + item.price, 0);
    },
  }, // Редьюсеры не используются, так как все действия асинхронные
  extraReducers: (builder) => {
    // Обрабатываем дополнительные редьюсеры для асинхронных действий
    // Обработка успешного выполнения fetchBasket
    builder.addCase(fetchBasket.fulfilled, (state, action) => {
      state.data = action.payload; // Обновляем состояние данными из payload
    });

    // Обработка успешного выполнения postBasket
    builder.addCase(postBasket.fulfilled, (state, action) => {
      state.data.push(action.payload); // Добавляем новый элемент в массив данных
    });

    // Обработка успешного выполнения delBasket
    builder.addCase(delBasket.fulfilled, (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload); // Удаляем элемент по id из массива данных
    });
  },
});

export const {
  setSelectedProduct,
  setIsOpen,
  setIsPageOpen,
  calculateTotalCount,
  calculateTotalPrice,
  setIsProductOpen,
} = basketSlice.actions;
// Экспортируем редьюсер среза состояния по умолчанию
export const basketReducer = basketSlice.reducer;
