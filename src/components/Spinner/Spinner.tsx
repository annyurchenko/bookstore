import { CSSProperties } from "react";
import GridLoader from "react-spinners/GridLoader";

const override: CSSProperties = {
  display: "block",
  margin: "200px auto",
  borderColor: "red",
};

export const Spinner = () => {
  //   <GridLoader color={`${Color.Primary}`}
  // loading={isLoading} cssOverride={override} size={15}
  return <GridLoader color={"black"} loading={true} cssOverride={override} size={15} />;
};
