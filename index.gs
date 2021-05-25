const newMapper1 = v => v.slice(1).map(r => r.reduce((a, val, i) => ( a[v[0][i]] = val, a ), {}));

const newMapper2 = values => values.slice(1).map(
  row => row.reduce(
    (obj, currentValue, currentIndex) => ( obj[values[0][currentIndex]] = currentValue, obj ), 
    {}
  )
);