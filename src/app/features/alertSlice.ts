import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AlertType = 'success' | 'error';

interface Alert {
  id: number;
  message: string;
  type: AlertType;
}

interface AlertState {
  alerts: Alert[];
}

const initialState: AlertState = {
  alerts: [],
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<{ message: string; type: AlertType }>) => {
      const newAlert: Alert = {
        id: Date.now(),
        message: action.payload.message,
        type: action.payload.type,
      };
      state.alerts.push(newAlert);
    },
    removeAlert: (state, action: PayloadAction<number>) => {
      state.alerts = state.alerts.filter(alert => alert.id !== action.payload);
    },
    clearAlerts: (state) => {
      state.alerts = [];
    },
  },
});

export const { addAlert, removeAlert, clearAlerts } = alertSlice.actions;
export default alertSlice.reducer;
