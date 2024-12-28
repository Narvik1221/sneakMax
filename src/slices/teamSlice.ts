// Импортируем необходимые функции и типы из Redux Toolkit и axios
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Определяем базовый URL для API
export const BASE_URL: string = "https://91e76ca43b25a69c.mokky.dev";

// Определяем интерфейс для объекта команды
export interface ITeam {
  id: number; // Идентификатор команды
  imgUrl: string; // URL изображения команды
  name: string; // Название команды
  role: string; // Роль команды (например, игрок, тренер и т.д.)
}

// Создаем асинхронный thunk для получения данных команды
export const fetchTeam = createAsyncThunk<ITeam[]>(
  "team/fetchTeam", // Тип действия для fetchTeam
  async () => {
    try {
      // Выполняем GET-запрос к API для получения данных команды
      const { data } = await axios.get(`${BASE_URL}/team`);

      // Возвращаем полученные данные
      return data;
    } catch (error) {
      // Логируем ошибку в случае неудачи
      console.log("Failed to fetch:", error);
    }
  }
);

// Определяем интерфейс состояния с данными команды
interface IState {
  data: ITeam[]; // Массив объектов команды
}

// Начальное состояние с пустым массивом данных
const initialState: IState = {
  data: [],
};

// Создаем срез (slice) для управления состоянием команды
export const teamSlice = createSlice({
  name: "team", // Имя среза
  initialState, // Начальное состояние
  reducers: {}, // Здесь можно добавить синхронные редюсеры (пока пусто)
  extraReducers: (builder) => {
    // Добавляем обработчик для успешного выполнения fetchTeam
    builder.addCase(
      fetchTeam.fulfilled,
      (state, action: PayloadAction<ITeam[]>) => {
        // Обновляем состояние с данными команды из действия
        state.data = action.payload;
      }
    );
  },
});

// Экспортируем редюсер по умолчанию для использования в хранилище

export const teamReducer = teamSlice.reducer;
