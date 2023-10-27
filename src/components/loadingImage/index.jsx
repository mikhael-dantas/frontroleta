import { Card, Image } from "antd";
import ImageLoading from "./../../assets/img/95728-loading-19.gif";

function LoadingImage() {
  return (
    <Card style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "column", justifyContent: "center" }}>
        <h1 style={{ textAlign: "center" }}>Carregando...</h1>
        <Image src={ImageLoading} preview={false} width={100} />
      </div>
    </Card>
  );
}

export default LoadingImage;
