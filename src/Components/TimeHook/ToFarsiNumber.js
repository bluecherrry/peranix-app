const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

const  toFarsiNumber=(n)=> {
  return n
    .toString()
    .split('')
    .map(x => farsiDigits[x])
    .join('');
}

export default toFarsiNumber