import _ from "lodash";

function App() {
  const arrayData = [
    "Nguyễn Văn An",
    "Trần Thị Bích",
    "Lê Hoàng Nam",
    "Phạm Hồng Phúc",
    "Đặng Thị Mai",
    "Bùi Minh Quân",
    "Hoàng Ngọc Anh",
    "Võ Thanh Tú",
    "Đỗ Hải Yến",
    "Ngô Văn Dũng",
  ];

  const surnameSort = _.orderBy(arrayData, [(name) => name], ["desc"]);

  const lastNameSort = _.orderBy(
    arrayData,
    [(name) => name.split(" ").pop()],
    ["asc"]
  );

  const groupedData = _.groupBy(lastNameSort, (name) =>
    name.split(" ").pop()[0].toUpperCase()
  );

  return (
    <>
      <div>
        {surnameSort.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <hr />
      <div>
        {lastNameSort.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <hr />
      <div>
        {Object.entries(groupedData).map(([letter, names]) => (
          <div key={letter}>
            <h3>{letter}:</h3>
            {names.map((name, index) => (
              <div key={index}>{name}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
