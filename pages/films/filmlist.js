// example import film data as props and resolve promise object

import React from "react";
import getStaticProps from "../api/django-unchained";

export default function DjangoPage() {
  console.log(getStaticProps());

  // const data = await getDjangoStaticProps();
  // console.log(data);

  return null;
}
