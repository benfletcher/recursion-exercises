console.log(data2);

function formatData(data, depth = 0) {

  var indent = " ".repeat(depth * 4);

  Object.keys(data).forEach(key => {
    console.log(indent + key);
    formatData(data[key], depth + 1)
  });

}
function callFormat1() {
  formatData(data);
}

function formatData2(data, depth = 0) {
  var indent = " ".repeat(depth * 4);

  console.log(indent + data.name);

  if (data.reports) {
    data.reports.forEach(subordinate => {
      formatData2(subordinate, depth + 1);
    })
  }

}
function callFormat2() {
  formatData2(data2);
}
