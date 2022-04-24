import {useState} from "react";
import {Skeleton} from "@mui/material";

export const Loading = (props) => {
  const [count] = useState(Array(props.count).fill(1) || [])

  return (
      count.map((_,i) => <Skeleton animation="wave" variant="rectangular"  key={i} width={798} height={80}/>))
};
