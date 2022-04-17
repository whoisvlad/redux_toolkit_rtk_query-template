import { FC }     from "react"
import { Helmet } from "react-helmet";




export const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
  
      <main>
        <h1>React 18 + Redux-Toolkit + React router 6 DEMO</h1>
      </main>
    </>
  );
};
