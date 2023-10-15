const isProduction = process.env.REACT_APP_IS_PRODUCTION === 'true';

export const backendUrl = isProduction ? '' : 'http://localhost:3100/v1';
