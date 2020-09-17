const debounce = (f, ms) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => f.apply(this, args), ms);
  };
};

export default debounce;
