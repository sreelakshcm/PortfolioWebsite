import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAlert } from '@app/features/alertSlice';
import Alert from './Alert';
import { RootState } from '@app/store';

const AlertContainer: React.FC = () => {
  const dispatch = useDispatch();
  const alerts = useSelector((state: RootState) => state.alert.alerts);

  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 space-y-2">
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          message={alert.message}
          type={alert.type}
          onClose={() => dispatch(removeAlert(alert.id))}
        />
      ))}
    </div>
  );
};

export default AlertContainer;
