import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const histry = useHistory();

  const onClickDetaileA = () => histry.push("/page1/dtaileA");
  return (
    <div>
      <h1>Page1ページです。</h1>
      <Link to={{ pathname: "/page1/dtaileA", state: arr }}>Page1DtaileA</Link>
      <br />
      <Link to="/page1/dtaileB">Page1DtaileB</Link>
      <br />
      <button onClick={onClickDetaileA}>DetaileA</button>
    </div>
  );
};
