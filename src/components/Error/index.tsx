import * as React from "react";
import { useParams } from 'react-router-dom';

export default function Error() {
  let { code } = useParams()
  return (
    <header>ERROR code: {code || "missing code"}</header>
  );
}
