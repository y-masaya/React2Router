import { useLocation, useHistory } from "react-router-dom";

export const Page1DtaileA = () => {
  const { state } = useLocation();

  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DtaileAページです。</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
