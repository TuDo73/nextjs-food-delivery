import { LoadingStyle } from "./Loading.styles";

const Loading = () => {
  return (
    <LoadingStyle>
      <div className="loading-box">
        <div className="loading-box-wrap">
          <div className="loading-container">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
      </div>
    </LoadingStyle>
  );
};

export default Loading;
