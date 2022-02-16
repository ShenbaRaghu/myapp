import React from "react";
import Props from "./Props";
import data from "./Data";

// const allData = (values) => {
//   return (
//     <>
//       <Props imgsrc={values.imgsrc} title={values.title} btn={values.btn} />
//     </>
//   );
// };
const App = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {/* <Props
            imgsrc={data[0].imgsrc}
            title={data[0].title}
            btn={data[0].btn}
          /> */}
          {/* {data.map(allData)} */}
          {data.map((values) => {
            return (
              <>
                <Props
                  key={values.id}
                  id={values.id}
                  imgsrc={values.imgsrc}
                  title={values.title}
                  btn={values.btn}
                />
                
              </>
            );
          })}

          {/* <Props
            imgsrc={data[1].imgsrc}
            title={data[1].title}
            btn={data[1].btn}
          />
          <Props
            imgsrc={data[2].imgsrc}
            title={data[2].title}
            btn={data[2].btn}
          />
          <Props
            imgsrc={data[3].imgsrc}
            title={data[3].title}
            btn={data[3].btn}
          /> */}
        </div>
      </div>
    </>
  );
};

export default App;
