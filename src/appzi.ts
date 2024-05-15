import ReactAppzi from 'react-appzi';

if (typeof window !== 'undefined') {
  const APPZI_TOKEN = process.env.REACT_APP_APPZI_TOKEN || 'zpjcs'
  ReactAppzi.initialize(APPZI_TOKEN);
}
