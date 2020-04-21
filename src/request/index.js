import axios from 'axios';
import memoizee from 'memoizee';

const createMemoizeDecorator = (func, isMemoize) => {
  let decoratedFunc = func;

  if (isMemoize) {
    decoratedFunc = memoizee(func, {
      primitive: true,
    });
  }

  return decoratedFunc;
};

const createRequest = () => {
  const get = createMemoizeDecorator(url => axios.get(url), true);

  return { get };
};

const request = createRequest();

export default request;
