import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
        }, 5000);
        return () => clearTimeout(timer);
    }, [message]);

    return (
        <div style={styles.notificationContainer}>
            <p style={styles.notificationText}>{message.text}</p>
        </div>
    );
};

const styles = {
  notificationContainer: {
      position: 'fixed',
      top: '100px',
      right: '0px',
      backgroundColor: 'green',
      color: 'white',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
  },
  notificationText: {
      margin: 0,
  },
};

Notification.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Notification;
